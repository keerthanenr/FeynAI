from utils.db import get_db_session
from models.user import User

def get_leaderboard():
    db = get_db_session()
    users = db.query(User).order_by(User.score.desc()).limit(10).all()
    leaderboard = [{"email": user.email, "score": user.score} for user in users]
    db.close()
    return {"leaderboard": leaderboard}
