from flask import Blueprint, jsonify

public_api_bp = Blueprint('public_api_bp',__name__)

@public_api_bp.route('/greeting')
def get_greeting():
    return jsonify({
        'message': '爱来自后端'
    })