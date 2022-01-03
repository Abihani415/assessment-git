import React from 'react'
import './gitrepo.css'

const RepoDetail = ({ repo }) => {
  const { name, description, owner_name, repo_url, stars } = repo
  return (
    <>
      <div className="repo-wrapper card my-3 pb-3">
        <div className="d-flex align-items-start justify-content-between p-3 border-bottom">
          <div>
            <span className="card-heading">Name:</span> &nbsp;
            <span className="reponame ">{name}</span>
          </div>
          <div>
            <i className="fa fa-star"></i>
            <span className="text-dark">{stars}</span>
          </div>
        </div>
        <div className="repo_desc p-3">
          <span className="card-heading">Description: &nbsp;</span>

          <span className="description">{description || 'N/A'}</span>
        </div>
        <div className="d-flex align-items-start justify-content-between px-3">
          <div className="reponame">
            <span className="card-heading">Owner Name: &nbsp;</span>

            <span>{owner_name}</span>
          </div>
          <div className="reponame">
            <a href={repo_url} target="_blank" rel="noreferrer">
              Visit Repo
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default RepoDetail
