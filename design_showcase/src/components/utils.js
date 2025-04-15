export const random = (array_length) => { return Math.floor(Math.random() * array_length)}

export const parseOrientation = (type) => {
    return type.includes('portrait') ?
        'portrait' : 'landscape'
}

export const pathToTitle = (path) => {
    let capitalize = (str) => {
        return str[0].toUpperCase() + str.slice(1)
    }
    let titles = path.split('/')
    const title_2= titles.at(-1).split('_').map((path)=>{
        return capitalize(path)
        }).join(" ")
    if(titles.length === 2){
        return [title_2]
    }
    const title_1 = titles.at(-2).split('_').map((title)=>{
        return capitalize(title)
        }).join(" ")
    const link = `/${titles.at(-2)}`
    return [title_2, title_1, link]
}


export const pathToId = (path) => {
    return path.split('/')[2]
}

export const getProjectsbyTeam = (teamate, proj_dic) => {
    return Object.keys(proj_dic).filter((proj)=>{
        return proj_dic[proj].collaborators.includes(teamate)
        })
}

export const getProjectsbyService = (service, proj_dic) => {
    return Object.keys(proj_dic).filter((proj)=>{
        return proj_dic[proj].services.includes(service)
        })
}