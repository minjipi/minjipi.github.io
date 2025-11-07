---
layout: default
title: MBTI 궁합 가이드
description: MBTI 유형별 소개팅 궁합과 대화 팁을 알아보세요
---

<style>
  .hero {
    text-align: center;
    padding: 40px 20px;
    margin-bottom: 50px;
    background: linear-gradient(135deg, #fef3f8, #eff6ff);
    border-radius: 20px;
  }

  .hero h2 {
    font-size: 36px;
    margin-bottom: 16px;
    margin-top: 0;
    border: none;
    padding: 0;
  }

  .hero p {
    font-size: 18px;
    color: #6b7280;
    margin-bottom: 0;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-bottom: 40px;
  }

  .card {
    background: white;
    padding: 32px;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    display: block;
    border: 3px solid transparent;
  }

  .card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: #fbc2eb;
  }

  .card-icon {
    font-size: 48px;
    margin-bottom: 16px;
  }

  .card h3 {
    font-size: 24px;
    margin-bottom: 12px;
    margin-top: 0;
    color: #1f2937;
  }

  .card p {
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    .hero h2 {
      font-size: 28px;
    }

    .hero p {
      font-size: 16px;
    }

    .cards {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="hero">
  <h2>💕 MBTI로 알아보는 소개팅 가이드</h2>
  <p>16가지 MBTI 유형별 완벽한 소개팅 전략을 확인하세요</p>
</div>

<div class="cards">
  <a href="{{ '/mbti/compatibility.html' | relative_url }}" class="card">
    <div class="card-icon">🔮</div>
    <h3>MBTI 궁합 테스트</h3>
    <p>나와 상대방의 MBTI 궁합을 바로 확인해보세요. 궁합 점수와 함께 장점과 주의사항을 알려드려요.</p>
  </a>

  <a href="{{ '/mbti/conversation.html' | relative_url }}" class="card">
    <div class="card-icon">💬</div>
    <h3>MBTI별 대화 주제</h3>
    <p>16가지 MBTI 유형이 좋아하는 대화 주제와 피해야 할 주제를 확인하세요. 대화가 술술 풀려요!</p>
  </a>

  <a href="{{ '/mbti/first-message.html' | relative_url }}" class="card">
    <div class="card-icon">📱</div>
    <h3>첫 카톡 템플릿</h3>
    <p>MBTI별 맞춤 첫 메시지 템플릿으로 좋은 첫인상을 남기세요. 실전에서 바로 사용 가능해요.</p>
  </a>

  <a href="{{ '/mbti/dating-tips.html' | relative_url }}" class="card">
    <div class="card-icon">👔</div>
    <h3>소개팅 룩 & 장소</h3>
    <p>소개팅 패션 추천부터 MBTI별 데이트 장소까지! 완벽한 소개팅 준비를 도와드려요.</p>
  </a>

  <a href="{{ '/mbti/questions.html' | relative_url }}" class="card">
    <div class="card-icon">❓</div>
    <h3>소개팅 질문 리스트</h3>
    <p>어색한 침묵을 깨는 25가지 질문! 처음부터 깊은 대화까지 단계별로 준비했어요.</p>
  </a>

  <a href="{{ '/mbti/after.html' | relative_url }}" class="card">
    <div class="card-icon">💝</div>
    <h3>애프터 성공률 높이기</h3>
    <p>첫 만남 이후 2차, 3차로 이어가는 방법! 연애로 발전시키는 타임라인과 전략을 알려드려요.</p>
  </a>
</div>
