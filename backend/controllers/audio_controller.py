import os
from schemas.response import AudioResponse
from utils import groq, llm
from utils.db import get_db_session
from models.user import User

async def process_audio(file, current_user):
    # Save the audio file temporarily
    contents = await file.read()
    temp_file_path = "temp_audio.wav"
    with open(temp_file_path, "wb") as f:
        f.write(contents)

    # Transcribe audio using groq and Whisper model
    transcription = groq.transcribe_audio(temp_file_path)
    os.remove(temp_file_path)

    # Check the answer using Llama 70b model
    score = llm.check_answer(transcription)
    if score < 50:
        return AudioResponse(message="If you know you know")
    else:
        # Update user's score
        db = get_db_session()
        user = db.query(User).filter(User.id == current_user.id).first()
        user.score += 1
        db.commit()
        db.close()
        # Get follow-up question from Gemma2 9b model
        follow_up_question = llm.get_follow_up_question()
        return AudioResponse(
            message="Good job!", follow_up_question=follow_up_question
        )
