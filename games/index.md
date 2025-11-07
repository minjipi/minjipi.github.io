---
layout: default
title: 게임 목록
description: 모든 미니 게임 보기
---

<style>
  .page-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .page-header h2 {
    font-size: 32px;
    font-weight: 800;
    color: #1f2937;
    margin-bottom: 12px;
  }

  .games-list {
    display: grid;
    gap: 24px;
  }

  .game-item {
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    border: 2px solid #fcd34d;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    gap: 24px;
    align-items: center;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s;
  }

  .game-item:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 24px rgba(251, 191, 36, 0.3);
  }

  .game-item-icon {
    font-size: 80px;
    flex-shrink: 0;
  }

  .game-item-content {
    flex: 1;
  }

  .game-item h3 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #1f2937;
  }

  .game-item p {
    color: #4b5563;
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 12px;
  }

  .game-features {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .feature-tag {
    background: rgba(255, 255, 255, 0.8);
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #92400e;
  }

  .play-button {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 12px 24px;
    border-radius: 12px;
    font-weight: 700;
    display: inline-block;
    margin-top: 12px;
    transition: transform 0.2s;
  }

  .play-button:hover {
    transform: scale(1.05);
  }
</style>

<div class="page-header">
  <h2>🎮 전체 게임 목록</h2>
  <p>재미있는 미니 게임들을 모두 만나보세요!</p>
</div>

<div class="games-list">
  <a href="{{ '/games/hamster.html' | relative_url }}" class="game-item">
    <div class="game-item-icon">🐹</div>
    <div class="game-item-content">
      <h3>햄스터 잡기 게임</h3>
      <p>15초 안에 귀여운 햄스터를 잡아 점수를 올려보세요! 콤보 시스템, 골든 햄스터, 레벨 시스템으로 중독성 MAX!</p>
      <div class="game-features">
        <span class="feature-tag">⏱️ 15초</span>
        <span class="feature-tag">🔥 콤보</span>
        <span class="feature-tag">⭐ 골든</span>
        <span class="feature-tag">📊 레벨업</span>
      </div>
      <div class="play-button">▶ 지금 플레이하기</div>
    </div>
  </a>

  <!-- 추가 게임들 -->
</div>
