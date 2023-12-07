import {useState} from 'react'
import "./WorkExp.css";


function WorkExperience2() {
const [position, setPosition] = useState("")
const [company, setCompany] = useState("")
const [title, setTitle] = useState("")
  return (
    <div className="we_container">
						<input
							// id={`we_position_${idx}`}
							name="position"
							type="text"
							value={position}
							placeholder="Position"
							onChange={(e) =>
								setPosition(e.target.value)
							}
						/>
						<input
							// id={`we_company_${idx}`}
							name="company"
							type="text"
							value={company}
							placeholder="Company"
							onChange={(e) =>
								setCompany(e.target.value)
							}
						/>
						<input
							// id={`we_title_${idx}`}
							name="title"
							type="text"
							value={title}
							placeholder="Title"
							onChange={(e) =>
								setTitle(e.target.value)
							}
						/>
<button>Save</button>
						{/* <input
							id={`we_address_${idx}`}
							name="address"
							type="text"
							value={workExp.address}
							placeholder="Address"
							onChange={(e) =>
								changeWorkExpHandler(e, workExp.id)
							}
						/>
						<input
							id={`we_start_${idx}`}
							name="startingDate"
							type="date"
							value={workExp.startingDate}
							placeholder="Start Date"
							onChange={(e) =>
								changeWorkExpHandler(e, workExp.id)
							}
						/>
						<input
							id={`we_end_${idx}`}
							name="endingDate"
							type="date"
							value={workExp.endingDate}
							placeholder="End Date"
							onChange={(e) =>
								changeWorkExpHandler(e, workExp.id)
							}
						/>
						<textarea
							id={`we_description_${idx}`}
							name="description"
							type="text"
							value={workExp.description}
							placeholder="Description"
							rows="5"
							onChange={(e) =>
								changeWorkExpHandler(e, workExp.id)
							}
						/> */}
					</div>
  )
}

export default WorkExperience2
