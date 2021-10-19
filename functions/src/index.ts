import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { object } from "firebase-functions/v1/storage";
admin.initializeApp();
const db = admin.firestore();

const sendResponse = (response: functions.Response, statusCode: number, body: any) => {
    response.send(  {
        statusCode,
        body:JSON.stringify(body)
    })
}

export const addDataset = functions.https.onRequest(async (req: any, res: any) => {
    //処理を描く
    if (req.method === 'POST') {
        sendResponse(res, 405, {error: "Invalid Request"}) 
       } else {
           const dataset = req.body;
           for (const key of object.keys(dataset)) {
               const data = dataset[key];
               await db.collection('questions').doc(key).set(data)
           }
            sendResponse(res, 200, {message: 'Successfully added dataset! WooHoo!'});

       }
});