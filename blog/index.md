---
layout: default
title: 블로그
description: 모든 포스트 보기
---

<style>
  .post-list {
    list-style: none;
    padding: 0;
  }

  .post-item {
    background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    border: 2px solid #bae6fd;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 16px;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .post-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.2);
  }

  .post-item a {
    text-decoration: none;
    color: inherit;
  }

  .post-title {
    font-size: 24px;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 8px;
  }

  .post-date {
    color: #6b7280;
    font-size: 14px;
    margin-bottom: 12px;
  }

  .post-excerpt {
    color: #4b5563;
    line-height: 1.6;
  }
</style>

## 📝 모든 포스트

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts %}
  <li class="post-item">
    <a href="{{ post.url | relative_url }}">
      <h3 class="post-title">{{ post.title }}</h3>
      <div class="post-date">{{ post.date | date: "%Y년 %m월 %d일" }}</div>
      {% if post.excerpt %}
      <div class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</div>
      {% endif %}
    </a>
  </li>
  {% endfor %}
</ul>
{% else %}
<p>아직 포스트가 없습니다.</p>
{% endif %}
