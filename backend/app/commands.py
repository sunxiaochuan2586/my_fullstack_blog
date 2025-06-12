# 文件位置: backend/app/commands.py

import click
from flask import Blueprint
from . import db # 从 app 包导入 db 实例

# 1. 创建一个用于承载命令的蓝图
commands_bp = Blueprint('commands', __name__, cli_group=None)

# 2. 定义一个名为 'init-db' 的命令
@commands_bp.cli.command('blog-db')
def init_db_command():
    """清除现有数据并重新创建所有数据表。"""
    # 这在开发初期非常有用
    db.drop_all()
    db.create_all()
    click.echo('数据库已成功初始化！')

# 将来您可以添加更多命令，比如创建管理员账户
# @commands_bp.cli.command('create-admin')
# @click.argument('email')
# def create_admin(email):
#     ...