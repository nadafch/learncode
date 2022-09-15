import React from 'react'
import LearnPage from './LearnPage';
import learn from './DataLearn';

function LearnMap() {
    return (
        <React.Fragment>
            <div className="Card">
                {learn.map((dl) => (
                    <LearnPage
                        image={dl.image}
                        judul={dl.judul}
                        penulis={dl.penulis}
                        text={dl.text}
                    />
                ))}
            </div>
        </React.Fragment>
    )
}

export default LearnMap;