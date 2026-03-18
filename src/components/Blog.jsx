import React from 'react';
import { POSTS } from '../data/data';
import '../styles/Blog.css';

function PostCard({ tag, title, excerpt, date, author }) {
  return (
    <article className="post-card">
      <div className="post-card__header">
        <span className="post-card__tag">{tag}</span>
        <h3 className="post-card__title">{title}</h3>
      </div>
      <div className="post-card__body">
        <p className="post-card__excerpt">{excerpt}</p>
        <div className="post-card__meta">
          <span>{date}</span>
          <span>{author}</span>
        </div>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="section-wrapper" style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <span className="section-label">ls -la /var/www/revelacoes/</span>
        <h2 className="section-title">
          Últimas <span>Revelações</span>
        </h2>
        <div className="blog__grid">
          {POSTS.map((post, i) => (
            <PostCard key={i} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
