var mongoose = require('mongoose');

    var nd_historyAutoAppraisalStorageSchema = new mongoose.Schema({
         text: String, 
         user_id: String, 
         user_name: String,
         created: { type: Date, default: Date.now } 
    });

     var AutoAppraisalStorageSchema = new mongoose.Schema({
         appraisalDate: {type: Date},
         appraisalEndDate: {type: Date},
         appraisalStatus: {type: String},
         appraisalToEmployee: {type: String},
         appraisalToEmployeeName: {type: String},
         appraisalToEmployeeUnit: {type: String},
         appraisalToEmployeeDepartment: {type: String},
         appraisalToEmployeeBrand: {type: String},
         appraisalType: {type: String},
         appraisalDevice: {type: String},
         appraisalValue: {type: Number},
         appraisalMaxValue: {type: Number},
         appraisalPercent: {type: Number},
         appraisalGapValue: {type: Number},
         appraisalGapPercent: {type: Number},
         appraisalValueEvolution: {type: String},
         areasOverview: [areasOverviewSchema],
         nd_history: [nd_historyAutoAppraisalStorageSchema]
     }, { collection: config.app.customCollectionsPrefix+'auto_appraisal_storage' })


var areasOverviewSchema = new mongoose.Schema({
    areaID: {type: String},
    areaSubject: {type: String},
    areaValue: {type: Number},
    areaValueDescription: {type: String},
    areaMaxValue: {type: Number},
    areaPercent: {type: Number},
    areaGapValue: {type: Number},
    areaGapPercent: {type: Number},
    areaWeightActive: {type: Boolean},
    areaWeight: {type: Number},
    behaviours: [behavioursSchema]
});

var behavioursSchema = new mongoose.Schema({
    behaviourID: {type: String},
    behaviourSubject: {type: String},
    behaviourValue: {type: Number},
    behaviourValueDescription: {type: String},
    behaviourValueColor: {type: String},
    behaviourNotes: {type: String},
    behaviourMaxValue: {type: Number},
    behaviourPercent: {type: Number},
    behaviourGapValue: {type: Number},
    behaviourGapPercent: {type: Number},
    behaviourWeightActive: {type: Boolean},
    behaviourWeight: {type: Number},
    notApplicable: {type: Boolean}
});

var AutoAppraisalStorage = connection.model('AutoAppraisalStorage', AutoAppraisalStorageSchema);
module.exports = AutoAppraisalStorage;