// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div className="course-container">
      <div className="title-container">
        <h1>{courseTitle}</h1>
        <div className="date-time-container">
          <AiFillClockCircle className="clock" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="list-container">
        {tagsList.map(eachObj => (
          <p key={eachObj.id} className="list-item">
            {eachObj.name}
          </p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
