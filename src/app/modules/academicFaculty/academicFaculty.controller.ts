import { AcademicFacultyServices } from "./academicFaculty.service";
import catchAsync from "../../utilis/catchAsync";
import sendResponse from "../../utilis/sendResponce";
import httpStatus from "http-status";

// created academic faculty
const createAcademicFaculty = catchAsync(async (req, res) => {
    const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic Faculty created successfully',
        data: result
    })
})

const getAllAcademicFaculties = catchAsync(async (req, res) => {
    const result = await AcademicFacultyServices.getAllAcademicFacultiesFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Faculty are retrieved successfully",
        data: result
    })
})


const getSingleAcademicFaculty = catchAsync(async (req, res) => {
    const { facultyId } = req.params;
    const result = await AcademicFacultyServices.getSingleAcademicFacultiesFromDB(facultyId);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Single Academic faculty retrived successfully ",
        data: result
    })
})

const updateAcademicFaculty = catchAsync(async (req, res) => {
    const { facultyId } = req.body;
    const result = await AcademicFacultyServices.updateAcademicFacultiesIntoDB(facultyId, req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Faculty updated successfully",
        data: result
    })
})

export const AcademicFacultyControllers = {
    createAcademicFaculty,
    getAllAcademicFaculties,
    updateAcademicFaculty,
    getSingleAcademicFaculty
}