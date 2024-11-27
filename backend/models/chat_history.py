from sqlalchemy import Column, Integer, String, ForeignKey, Text
from sqlalchemy.orm import relationship
from utils.db import Base

class ChatHistory(Base):
    __tablename__ = "chat_history"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    role = Column(String)  # 'user' or 'assistant'
    message = Column(Text)
    timestamp = Column(Integer)  # Unix timestamp or datetime
    session_id = Column(String)  # To handle multiple sessions

    user = relationship("User", back_populates="chat_histories")
