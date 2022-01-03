import React from 'react'
import { Card } from 'react-bootstrap'
import './userdetail.css'

const UserDetail = (props) => {
  const { user } = props
  const date = new Date(user.member_since)
  return (
    <>
      <Card data-testid="user-profile-test-id">
        <div className="d-flex align-items-center p-3 flex-column">
          <a href={user.profile_url} target="_blank" rel="noreferrer">
            <Card.Img className="avatar" src={user.image} alt={user.name} />
          </a>
          <Card.Title className="mb-4 mt-3">
            {user.name}
            <div className="date">{date.toLocaleDateString()}</div>
          </Card.Title>
        </div>
        <Card.Body className="border-top p-2">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <span>Follower: {user.follower}</span>
            </div>
            <div>
              <span>Following: {user.following}</span>
            </div>
            <div>
              <span>Total Repo: {user.repo_count}</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default UserDetail
