import { SQLite } from 'expo';
import Expo from 'expo';

const tableName = 'qrs';
const db = SQLite.openDatabase('users');

export default class SQL {
    static InitDatabase() {
        db.transaction(tx => {
            tx.executeSql(
                `create table if not exists USERS (id integer primary key not null, username text, password text);`
            );
        });
    }

    static AddUser = (username, password) => {
        db.transaction(tx => {
                tx.executeSql(`insert into USERS (username, password) values (?,?)`, [
                    username,
                    password
                ]);
            },
            null,
            null
        );
        // var result = Expo.FileSystem.getInfoAsync('SQLite/<dbfilename>');
        alert('completed');
    };

    static GetQRS = () => {
        return new Promise((resolve, reject) => {
            db.transaction(async tx => {
                await tx.executeSql(
                    `select * from ${tableName} order by id DESC`,
                    null,
                    (_, { rows: { _array } }) => {
                        resolve(_array);
                    }
                );
            });
        });
    };
}
