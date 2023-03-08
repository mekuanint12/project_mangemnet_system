const Project = require('../models/Project');
const User = require('../models/User');
const mongoose = require('mongoose');


exports.createProject = async (req, res) => {
  try {
    const members = req.body.members.map(member => mongoose.Types.ObjectId(member.id));
    const project = new Project({
      name: req.body.name,
      description: req.body.description,
      endDate: req.body.endDate,
      members: members,
      tasks: req.body.tasks,
      status: req.body.status,
      category: req.body.category
    });

    await project.save();

    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: project
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Unable to create project',
      error: error.message
    });
  }
};



exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate('members', '-password');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('members', '-password');
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProjectById = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    }).populate('members', 'name email').exec();

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    await project.remove();
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

