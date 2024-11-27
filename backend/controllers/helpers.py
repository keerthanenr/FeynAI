# controllers/helpers.py

from utils.db import get_db_session
from models.chat_history import ChatHistory
import time

def add_message_to_chat_history(user, role, message, session_id):
    db = get_db_session()
    chat_message = ChatHistory(
        user_id=user.id,
        role=role,
        message=message,
        timestamp=int(time.time()),
        session_id=session_id
    )
    db.add(chat_message)
    db.commit()
    db.close()

def get_chat_history(user, session_id):
    db = get_db_session()
    history = (
        db.query(ChatHistory)
        .filter(ChatHistory.user_id == user.id, ChatHistory.session_id == session_id)
        .order_by(ChatHistory.timestamp)
        .all()
    )
    db.close()
    return history
