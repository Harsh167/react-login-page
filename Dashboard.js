// src/pages/Dashboard.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import './Dashboard.css';

const Dashboard = () => {
  const location = useLocation();
  const { username } = location.state || { username: 'User' };

  const cardData = [
    { title: 'My first post', content: 'This is my first post with more content inside' },
    { title: 'My second post', content: 'This is my second post with more content inside' },
    { title: 'My third post', content: 'This is my third post with more content inside' },
    { title: 'My fourth post', content: 'This is my fourth post with more content inside' },
    { title: 'My fifth post', content: 'This is my fifth post with more content inside' },
    { title: 'My sixth post', content: 'This is my sixth post with more content inside' }
  ];

  return (
    <div>
      <NavBar username={username} />
      <div className="card-grid">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
