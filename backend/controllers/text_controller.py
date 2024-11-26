from schemas.request import TextRequest
from schemas.response import TextResponse
from utils import llm
from utils.db import get_db_session
from models.user import User

async def process_text(request: TextRequest, current_user):
    # Check the answer using Llama 70b model
    score = llm.check_answer(request.text)
    if score < 50:
        return TextResponse(message="If you know you know")
    else:
        # Update user's score
        db = get_db_session()
        user = db.query(User).filter(User.id == current_user.id).first()
        user.score += 1
        db.commit()
        db.close()
        # Get follow-up question from Gemma2 9b model
        follow_up_question = llm.get_follow_up_question()
        return TextResponse(
            message="Good job!", follow_up_question=follow_up_question
        )
