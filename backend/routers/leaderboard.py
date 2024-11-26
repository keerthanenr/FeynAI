from fastapi import APIRouter
from controllers import leaderboard_controller

router = APIRouter(prefix="/leaderboard", tags=["Leaderboard"])

@router.get("/")
def get_leaderboard():
    return leaderboard_controller.get_leaderboard()
