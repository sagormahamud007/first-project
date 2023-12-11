import httpStatus from "http-status";
import catchAsync from "../../utilis/catchAsync";
import sendResponse from "../../utilis/sendResponce";
import { AcademicDepartmentServices } from "./academicDepartment.service";



const createAcademicDepartmentIntoDB = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentServices.createAcademicDepartment(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department created successfully",
        data: result
    })
})
const getAllAcademicDepartmentFromDB = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentServices.getAllAcademicDepartment()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic All Department Retrived successfully",
        data: result
    })
})
const getSingleAcademicDepartmentFromDB = catchAsync(async (req, res) => {
    const { departmentId } = req.params;
    const result = await AcademicDepartmentServices.getSingleAcademicDepartment(departmentId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Single Department Retrived successfully",
        data: result
    })
})
const updatedAcademicDepartmentIntoDB = catchAsync(async (req, res) => {
    const { departmentId } = req.body;
    const result = await AcademicDepartmentServices.updateAcademicDepartment(departmentId, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Academic Department Updated successfully",
        data: result
    })
})

export const AcademicDepartmentController = {
    createAcademicDepartmentIntoDB,
    getAllAcademicDepartmentFromDB,
    getSingleAcademicDepartmentFromDB,
    updatedAcademicDepartmentIntoDB
}