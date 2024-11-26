from fastapi import APIRouter, Depends, UploadFile, File
from controllers import audio_controller
from schemas.response import AudioResponse
from utils.auth import get_current_user

router = APIRouter(prefix="/audio", tags=["Audio"])

@router.post("/submit", response_model=AudioResponse)
async def submit_audio(
    file: UploadFile = File(...), current_user=Depends(get_current_user)
):
    return await audio_controller.process_audio(file, current_user)
