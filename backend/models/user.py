from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from utils.db import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    score = Column(Integer, default=0)
    chat_histories = relationship("ChatHistory", back_populates="user")
