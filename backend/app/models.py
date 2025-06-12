# 文件位置: backend/app/models.py

from . import db, login_manager
from flask_login import UserMixin
from datetime import datetime, timezone

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class User(db.Model, UserMixin):
    """用户数据模型 (基于您的完整版本)"""
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(60), nullable=False)
    posts = db.relationship('Post', backref='author', lazy=True)
    is_admin = db.Column(db.Boolean, nullable=False, default=False)
    registration_date = db.Column(db.DateTime, nullable=False, default=lambda: datetime.now(timezone.utc))
    avatar_hash = db.Column(db.String(32), default=None)
    bio = db.Column(db.String(200), nullable=True)
    github_url = db.Column(db.String(120), nullable=True)
    website_url = db.Column(db.String(120), nullable=True)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"

class Post(db.Model):
    """文章数据模型 (基于您的完整版本)"""
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    # 使用 server_default 是一个很好的实践，它让数据库层面来处理默认值
    date_posted = db.Column(db.DateTime, nullable=False, server_default=db.func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    views = db.Column(db.Integer, default=0)

    def __repr__(self):
        return f"Post('{self.title}', '{self.date_posted}')"