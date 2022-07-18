import { checkSecureNote, deleteSecureNote, getAllSecureNoteByUserId, getSecureNoteById, insertSecureNote } from "../repositories/secureNotesRepository.js"


export async function createNewSecureNotes(userId: number,title: string, note: string) {
    if(title.length > 50 || note.length > 1000){
        console.log("eaeae")
        throw {type: "Character limit exceeded", status: 400}
    }
    const check = await checkSecureNote(userId, title)
    console.log(check)
    if(check){
        throw {type: "Secure notes already exist", status: 400}
    }
    await insertSecureNote(userId, title, note)
}

export async function getSecureNote(userId:number, id?: number) {
    if(id){
        const secureNotes = await getSecureNoteById(userId, id)
        if(!secureNotes){
            throw {type: "Wrong secure notes id", status: 404}
        }
        return secureNotes
    }else{
        const secureNotes = await getAllSecureNoteByUserId(userId)
        
            return secureNotes 
        }
}

export async function deleteSecureNotes(userId: number, id: number) {
    await deleteSecureNote(userId, id)
}