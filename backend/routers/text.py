from fastapi import APIRouter, Depends
from controllers import text_controller
from schemas.request import TextRequest
from schemas.response import TextResponse
from utils.auth import get_current_user

router = APIRouter(prefix="/text", tags=["Text"])

@router.post("/submit", response_model=TextResponse)
async def submit_text(
    request: TextRequest, current_user=Depends(get_current_user)
):
    return await text_controller.process_text(request, current_user)
