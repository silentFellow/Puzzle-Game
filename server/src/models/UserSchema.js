import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  "name": { type: String, required: true },
  "email": { type: String },
  "avatar": { type: String },
  "games_played": { type: Number, default: 0 },
  "wins": { type: Number, default: 0 },
  "losses": { type: Number, default: 0 },
  "draws": { type: Number, default: 0 },
})

export default model('users', userSchema)
