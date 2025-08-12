import axios from "axios";
import { API_CONFIG } from "../config/api";


export const getUserProfile = async (userId) => {
  const res = await axios.get(`${API_CONFIG.BASE_URL}/user/${userId}/profile`);
  return res.data;
};

export const getUserSkills = async (userId) => {
  const res = await axios.get(`${API_CONFIG.BASE_URL}/user/${userId}/skills`);
  return res.data;
};

export const addUserSkill = async (userId, skillData) => {
  const res = await axios.post(`${API_CONFIG.BASE_URL}/user/${userId}/skills`, skillData);
  return res.data;
};

export const updateUserSkill = async (userId, skillId, skillData) => {
  const res = await axios.put(`${API_CONFIG.BASE_URL}/user/${userId}/skills/${skillId}`, skillData);
  return res.data;
};

export const deleteUserSkill = async (userId, skillId) => {
  const res = await axios.delete(`${API_CONFIG.BASE_URL}/user/${userId}/skills/${skillId}`);
  return res.data;
};


export const getUserEmploymentHistory = async (userId) => {
  const res = await axios.get(`${API_CONFIG.BASE_URL}/user/${userId}/employment-history`);
  return res.data;
};

export const addEmploymentHistory = async (userId, employmentData) => {
  const res = await axios.post(`${API_CONFIG.BASE_URL}/user/${userId}/employment-history`, employmentData);
  return res.data;
};

export const updateEmploymentHistory = async (userId, employmentId, employmentData) => {
  const res = await axios.put(`${API_CONFIG.BASE_URL}/user/${userId}/employment-history/${employmentId}`, employmentData);
  return res.data;
};

export const deleteEmploymentHistory = async (userId, employmentId) => {
  const res = await axios.delete(`${API_CONFIG.BASE_URL}/user/${userId}/employment-history/${employmentId}`);
  return res.data;
};

export const getEmploymentTypes = async () => {
  const res = await axios.get(`${API_CONFIG.BASE_URL}/employment-types`);
  return res.data;
};

export const getAvailableSkills = async () => {
  const res = await axios.get(`${API_CONFIG.BASE_URL}/skills`);
  return res.data;
};
