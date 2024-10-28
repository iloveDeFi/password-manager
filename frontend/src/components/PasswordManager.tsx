// // src/PasswordManager.tsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// interface Password {
//     _id: string;
//     password: string;
// }

// const PasswordManager: React.FC = () => {
//     const [passwords, setPasswords] = useState<Password[]>([]);
//     const [newPassword, setNewPassword] = useState<string>('');
//     const [updateId, setUpdateId] = useState<string | null>(null);
//     const [updatePassword, setUpdatePassword] = useState<string>('');

//     // Charger les mots de passe depuis le serveur
//     useEffect(() => {
//         const fetchPasswords = async () => {
//             try {
//                 const response = await axios.get<Password[]>('/passwords');
//                 setPasswords(response.data);
//             } catch (error) {
//                 console.error('Error fetching passwords:', error);
//             }
//         };
//         fetchPasswords();
//     }, []);

//     // Ajouter un mot de passe
//     const handleAddPassword = async (e: React.FormEvent) => {
//         e.preventDefault();
//         try {
//             await axios.post('/passwords', { password: newPassword });
//             setNewPassword('');
//             // Recharger les mots de passe
//             const response = await axios.get<Password[]>('/passwords');
//             setPasswords(response.data);
//         } catch (error) {
//             console.error('Error adding password:', error);
//         }
//     };

//     // Mettre à jour un mot de passe
//     const handleUpdatePassword = async (id: string) => {
//         try {
//             await axios.put(`/passwords/${id}`, { password: updatePassword });
//             setUpdateId(null);
//             setUpdatePassword('');
//             // Recharger les mots de passe
//             const response = await axios.get<Password[]>('/passwords');
//             setPasswords(response.data);
//         } catch (error) {
//             console.error('Error updating password:', error);
//         }
//     };

//     // Supprimer un mot de passe
//     const handleDeletePassword = async (id: string) => {
//         try {
//             await axios.delete(`/passwords/${id}`);
//             // Recharger les mots de passe
//             const response = await axios.get<Password[]>('/passwords');
//             setPasswords(response.data);
//         } catch (error) {
//             console.error('Error deleting password:', error);
//         }
//     };

//     return (
//         <div>
//             <h2>Gestion des Mots de Passe</h2>
//             <form onSubmit={handleAddPassword}>
//                 <input
//                     type="text"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     placeholder="Ajouter un nouveau mot de passe"
//                     required
//                 />
//                 <button type="submit">Ajouter</button>
//             </form>

//             <ul>
//                 {/* TO DO : Ma map doit etre un tableau first"} */}
//                 {passwords.map((password) => (
//                     <li key={password._id}>
//                         {updateId === password._id ? (
//                             <div>
//                                 <input
//                                     type="text"
//                                     value={updatePassword}
//                                     onChange={(e) => setUpdatePassword(e.target.value)}
//                                     placeholder="Mettre à jour le mot de passe"
//                                     required
//                                 />
//                                 <button onClick={() => handleUpdatePassword(password._id)}>Mettre à jour</button>
//                                 <button onClick={() => setUpdateId(null)}>Annuler</button>
//                             </div>
//                         ) : (
//                             <div>
//                                 <span>{password.password}</span>
//                                 <button onClick={() => setUpdateId(password._id)}>Modifier</button>
//                                 <button onClick={() => handleDeletePassword(password._id)}>Supprimer</button>
//                             </div>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default PasswordManager;