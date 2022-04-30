import fs from 'fs'
import path from 'path'

const galleryDirectory = path.join(process.cwd(), 'public/projects')



export function getAllProjectIds() {
    const projectIds = fs.readdirSync(galleryDirectory)
    return projectIds.map(project => {
        return {
            params: {
                proj: project
            }
        }
    })
}

export function getProjectImages(proj) {
    const fullPath = path.join(galleryDirectory, proj)
    const imagePaths = fs.readdirSync(fullPath).map(img => path.join(galleryDirectory, proj, img))
    return {
        proj,
        imagePaths
    }
}