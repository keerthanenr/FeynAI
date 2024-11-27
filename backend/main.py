from fastapi import FastAPI
from routers import auth, audio, text, leaderboard
from utils.db import engine, Base

app = FastAPI()

# Create database tables
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(auth.router)
app.include_router(audio.router)
app.include_router(text.router)
app.include_router(leaderboard.router)
