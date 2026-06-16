from app import models
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine

# IMPORT ROUTES
from app.routes import (
    auth,
    favorites,
    history,
    dashboard,
    recommendations,
    movies,
    watchlist,
    reviews,
    profile
)

# IMPORT ADMIN ROUTER
from app.routes.admin import router as admin_router

# CREATE TABLES
Base.metadata.create_all(bind=engine)

# FASTAPI APP
app = FastAPI(title="Movie Backend API")

# =========================
# CORS CONFIG
# =========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# ROUTES
# =========================
app.include_router(auth.router)
app.include_router(favorites.router)
app.include_router(history.router)
app.include_router(dashboard.router)
app.include_router(recommendations.router)
app.include_router(movies.router)
app.include_router(watchlist.router)
app.include_router(reviews.router)
app.include_router(profile.router)

# =========================
# ADMIN ROUTES
# =========================
app.include_router(admin_router)