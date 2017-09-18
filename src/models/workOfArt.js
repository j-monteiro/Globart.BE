import mongoose from 'mongoose';

const WorkOfArtType = Object.freeze({
   Paint : "paint",
   Sculpture : "sculpture" 
});

const Schema = mongoose.Schema;
const WorkOfArtSchema = new Schema({
  type: String,
  image: String,
  description: String,
  year: Date,
  author: String,
  priceEvaluation: Number,
  owner: String,
  createdBy: {type: String, default: "develop"},
  updatedBy: String,
  createDate: {type: Date, default: Date.now()},
  updateDate: Date
});

var WorkOfArt = mongoose.model('WorkOfArt', WorkOfArtSchema);

export default WorkOfArt;
