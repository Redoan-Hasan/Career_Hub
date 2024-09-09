

const getStoredApplies = () => {
    const storedApplies = localStorage.getItem('job-applies');
    if(storedApplies){
        return JSON.parse(storedApplies)
    }
    return [];
}

const saveApplies = (id) =>{
    const stored = getStoredApplies();
    const alreadyExist = stored.find(jobId => jobId === id)
    if(!alreadyExist){
        stored.push(id);
        localStorage.setItem('job-applies', JSON.stringify(stored))
    }
}

export {getStoredApplies,saveApplies}