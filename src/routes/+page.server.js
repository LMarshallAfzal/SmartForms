import sqlite3 from 'sqlite3';

export const actions = {
    default: async (event) => {
        const { request } = event;
            const formData = await request.formData();
            const email = formData.get("email");
            const password = formData.get("password");

            console.log(`Email:${email}, Password: ${password}`);

            // const db = new sqlite3.Database('data.db');

            // db.run(
            //     'INSERT INTO users (email, password) VALUES (?, ?)',
            //     [email, password],
            //     (err) => {
            //         if (err) {
            //             console.error('Error inserting data:', err);
            //         } else {
            //             console.log('Data inserted successfully');
            //         }
            //     }
            // )
            
            return { success: true };
    }
}