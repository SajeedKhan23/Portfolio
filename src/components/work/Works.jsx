import React from 'react'
// import { projectNav } from './Data'
import { projectsData } from './Data'
import WorksItems from './WorksItems'

const Works = () => {
    return (
        <div>
            <div className="work__filters">
                {/* {projectNav.map((item, index) => {
                    return <span className="work__item" key={index}>{item.index}</span>;
                })} */}
            </div>
            <div className="work__container container grid">
                {projectsData.map((item) => {
                    return <WorksItems item = {item} key={item.id} />
                })}
            </div>
        </div>
    )
}

export default Works