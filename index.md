---
layout: default
title: 홈
description: MBTI로 알아보는 완벽한 소개팅 궁합과 대화 팁
---

<style>
  .hero {
    text-align: center;
    padding: 40px 0;
  }

  .hero h2 {
    font-size: 36px;
    font-weight: 800;
    color: #1f2937;
    margin-bottom: 16px;
  }

  .hero p {
    font-size: 18px;
    color: #6b7280;
    margin-bottom: 30px;
  }

  .mbti-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
    margin-top: 40px;
  }

  .mbti-card {
    background: linear-gradient(135deg, #fef3f8, #fce7f3);
    border: 2px solid #fbcfe8;
    border-radius: 16px;
    padding: 24px;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s;
    cursor: pointer;
  }

  .mbti-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(236, 72, 153, 0.3);
    border-color: #f9a8d4;
  }

  .mbti-icon {
    font-size: 64px;
    margin-bottom: 16px;
    display: block;
  }

  .mbti-card h3 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #1f2937;
  }

  .mbti-card p {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.6;
  }

  .mbti-badge {
    display: inline-block;
    background: linear-gradient(135deg, #ec4899, #db2777);
    color: white;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 12px;
    margin-top: 12px;
  }

  .intro-section {
    background: linear-gradient(135deg, #fef3f8, #e0f2fe);
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 40px;
    text-align: center;
  }

  .intro-section h3 {
    font-size: 24px;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 16px;
  }

  .intro-section p {
    font-size: 16px;
    color: #6b7280;
    line-height: 1.8;
  }
</style>

<div class="hero">
  <h2>💕 MBTI로 시작하는 완벽한 소개팅</h2>
  <p>나와 딱 맞는 MBTI 궁합을 찾고, 소개팅에서 써먹을 대화 팁까지!</p>
</div>

<div class="intro-section">
  <h3>🎯 이런 고민 있으신가요?</h3>
  <p>
    "소개팅에서 뭘 물어봐야 하지?" 😰<br>
    "우리 MBTI 궁합이 좋을까?" 💭<br>
    "첫 카톡 뭐라고 보내지?" 📱<br>
    <br>
    걱정 마세요! MBTI 기반으로 완벽한 소개팅 가이드를 알려드립니다!
  </p>
</div>

<div class="mbti-grid">
  <a href="{{ '/mbti/compatibility.html' | relative_url }}" class="mbti-card">
    <span class="mbti-icon">💑</span>
    <h3>MBTI 궁합 테스트</h3>
    <p>나와 상대방의 MBTI를 입력하면 궁합 점수와 어울리는 이유를 알려드려요!</p>
    <span class="mbti-badge">🔥 인기</span>
  </a>

  <a href="{{ '/mbti/conversation.html' | relative_url }}" class="mbti-card">
    <span class="mbti-icon">💬</span>
    <h3>MBTI별 대화 주제</h3>
    <p>상대방 MBTI에 따라 좋아할 대화 주제와 피해야 할 주제를 알려드려요!</p>
    <span class="mbti-badge">✨ 추천</span>
  </a>

  <a href="{{ '/mbti/first-message.html' | relative_url }}" class="mbti-card">
    <span class="mbti-icon">📱</span>
    <h3>첫 카톡 템플릿</h3>
    <p>MBTI별 반응 좋은 첫 카톡 메시지 예시를 제공해드려요!</p>
    <span class="mbti-badge">💌 NEW</span>
  </a>

  <a href="{{ '/mbti/dating-tips.html' | relative_url }}" class="mbti-card">
    <span class="mbti-icon">👔</span>
    <h3>소개팅 룩 & 장소</h3>
    <p>MBTI별로 선호하는 데이트 장소와 옷차림 스타일을 추천해드려요!</p>
    <span class="mbti-badge">👗 추천</span>
  </a>

  <a href="{{ '/mbti/questions.html' | relative_url }}" class="mbti-card">
    <span class="mbti-icon">❓</span>
    <h3>소개팅 질문 리스트</h3>
    <p>어색한 침묵이 흐를 때 던질 수 있는 MBTI별 맞춤 질문들!</p>
    <span class="mbti-badge">💡 꿀팁</span>
  </a>

  <a href="{{ '/mbti/after.html' | relative_url }}" class="mbti-card">
    <span class="mbti-icon">🌙</span>
    <h3>소개팅 애프터 성공률</h3>
    <p>MBTI별 애프터 제안 성공 확률과 타이밍, 방법을 알려드려요!</p>
    <span class="mbti-badge">🎯 실전</span>
  </a>
</div>

<div class="intro-section" style="margin-top: 60px;">
  <h3>📝 최근 블로그 포스트</h3>
  <p>소개팅과 MBTI에 관한 유용한 팁들을 공유합니다!</p>
</div>
