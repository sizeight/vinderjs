import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

/*
import brands from '@fortawesome/fontawesome-free-brands';
import light from '@fortawesome/pro-light-svg-icons'; // includes free-light
import regular from '@fortawesome/pro-regular-svg-icons'; // includes free-regular
import solid from '@fortawesome/pro-solid-svg-icons'; // includes free-solid

library.add(brands, light, regular, solid);
*/

/*

import * as faLight from '@fortawesome/pro-light-svg-icons/fa';
import { fa from '@fortawesome/pro-regular-svg-icons/fa';
import * as faSolid from '@fortawesome/pro-solid-svg-icons/fa';
library.add(faLight, fa, faSolid);

*/

/* eslint-disable */

// angle-double-down
import { faAngleDoubleDown as faAngleDoubleDownLight } from '@fortawesome/pro-light-svg-icons/faAngleDoubleDown';
import { faAngleDoubleDown } from '@fortawesome/pro-regular-svg-icons/faAngleDoubleDown';
import { faAngleDoubleDown as faAngleDoubleDownSolid } from '@fortawesome/pro-solid-svg-icons/faAngleDoubleDown';
library.add(faAngleDoubleDownLight, faAngleDoubleDown, faAngleDoubleDownSolid);

// angle-double-right
import { faAngleDoubleRight as faAngleDoubleRightLight } from '@fortawesome/pro-light-svg-icons/faAngleDoubleRight';
import { faAngleDoubleRight } from '@fortawesome/pro-regular-svg-icons/faAngleDoubleRight';
import { faAngleDoubleRight as faAngleDoubleRightSolid } from '@fortawesome/pro-solid-svg-icons/faAngleDoubleRight';
library.add(faAngleDoubleRightLight, faAngleDoubleRight, faAngleDoubleRightSolid);

// angle-double-up
import { faAngleDoubleUp as faAngleDoubleUpLight } from '@fortawesome/pro-light-svg-icons/faAngleDoubleUp';
import { faAngleDoubleUp } from '@fortawesome/pro-regular-svg-icons/faAngleDoubleUp';
import { faAngleDoubleUp as faAngleDoubleUpSolid } from '@fortawesome/pro-solid-svg-icons/faAngleDoubleUp';
library.add(faAngleDoubleUpLight, faAngleDoubleUp, faAngleDoubleUpSolid);

// angle-down
import { faAngleDown as faAngleDownLight } from '@fortawesome/pro-light-svg-icons/faAngleDown';
import { faAngleDown } from '@fortawesome/pro-regular-svg-icons/faAngleDown';
import { faAngleDown as faAngleDownSolid } from '@fortawesome/pro-solid-svg-icons/faAngleDown';
library.add(faAngleDownLight, faAngleDown, faAngleDownSolid);

// angle-right
import { faAngleRight as faAngleRightLight } from '@fortawesome/pro-light-svg-icons/faAngleRight';
import { faAngleRight } from '@fortawesome/pro-regular-svg-icons/faAngleRight';
import { faAngleRight as faAngleRightSolid } from '@fortawesome/pro-solid-svg-icons/faAngleRight';
library.add(faAngleRightLight, faAngleRight, faAngleRightSolid);

// arrow-left
import { faArrowLeft as faArrowLeftLight } from '@fortawesome/pro-light-svg-icons/faArrowLeft';
import { faArrowLeft } from '@fortawesome/pro-regular-svg-icons/faArrowLeft';
import { faArrowLeft as faArrowLeftSolid } from '@fortawesome/pro-solid-svg-icons/faArrowLeft';
library.add(faArrowLeftLight, faArrowLeft, faArrowLeftSolid);

// ban
import { faBan as faBanLight } from '@fortawesome/pro-light-svg-icons/faBan';
import { faBan } from '@fortawesome/pro-regular-svg-icons/faBan';
import { faBan as faBanSolid } from '@fortawesome/pro-solid-svg-icons/faBan';
library.add(faBanLight, faBan, faBanSolid);

// bars
import { faBars as faBarsLight } from '@fortawesome/pro-light-svg-icons/faBars';
import { faBars } from '@fortawesome/pro-regular-svg-icons/faBars';
import { faBars as faBarsSolid } from '@fortawesome/pro-solid-svg-icons/faBars';
library.add(faBarsLight, faBars, faBarsSolid);

// bookmark
import { faBookmark as faBookmarkLight } from '@fortawesome/pro-light-svg-icons/faBookmark';
import { faBookmark } from '@fortawesome/pro-regular-svg-icons/faBookmark';
import { faBookmark as faBookmarkSolid } from '@fortawesome/pro-solid-svg-icons/faBookmark';
library.add(faBookmarkLight, faBookmark, faBookmarkSolid);

// box
import { faBox as faBoxLight } from '@fortawesome/pro-light-svg-icons/faBox';
import { faBox } from '@fortawesome/pro-regular-svg-icons/faBox';
import { faBox as faBoxSolid } from '@fortawesome/pro-solid-svg-icons/faBox';
library.add(faBoxLight, faBox, faBoxSolid);

// briefcase
import { faBriefcase as faBriefcaseLight } from '@fortawesome/pro-light-svg-icons/faBriefcase';
import { faBriefcase } from '@fortawesome/pro-regular-svg-icons/faBriefcase';
import { faBriefcase as faBriefcaseSolid } from '@fortawesome/pro-solid-svg-icons/faBriefcase';
library.add(faBriefcaseLight, faBriefcase, faBriefcaseSolid);

// calculator
import { faCalculator as faCalculatorLight } from '@fortawesome/pro-light-svg-icons/faCalculator';
import { faCalculator } from '@fortawesome/pro-regular-svg-icons/faCalculator';
import { faCalculator as faCalculatorSolid } from '@fortawesome/pro-solid-svg-icons/faCalculator';
library.add(faCalculatorLight, faCalculator, faCalculatorSolid);

// caret-down
import { faCaretDown as faCaretDownLight } from '@fortawesome/pro-light-svg-icons/faCaretDown';
import { faCaretDown } from '@fortawesome/pro-regular-svg-icons/faCaretDown';
import { faCaretDown as faCaretDownSolid } from '@fortawesome/pro-solid-svg-icons/faCaretDown';
library.add(faCaretDownLight, faCaretDown, faCaretDownSolid);

// caret-up
import { faCaretUp as faCaretUpLight } from '@fortawesome/pro-light-svg-icons/faCaretUp';
import { faCaretUp } from '@fortawesome/pro-regular-svg-icons/faCaretUp';
import { faCaretUp as faCaretUpSolid } from '@fortawesome/pro-solid-svg-icons/faCaretUp';
library.add(faCaretUpLight, faCaretUp, faCaretUpSolid);

// chart-bar
import { faChartBar as faChartBarLight } from '@fortawesome/pro-light-svg-icons/faChartBar';
import { faChartBar } from '@fortawesome/pro-regular-svg-icons/faChartBar';
import { faChartBar as faChartBarSolid } from '@fortawesome/pro-solid-svg-icons/faChartBar';
library.add(faChartBarLight, faChartBar, faChartBarSolid);

// chart-line
import { faChartLine as faChartLineLight } from '@fortawesome/pro-light-svg-icons/faChartLine';
import { faChartLine } from '@fortawesome/pro-regular-svg-icons/faChartLine';
import { faChartLine as faChartLineSolid } from '@fortawesome/pro-solid-svg-icons/faChartLine';
library.add(faChartLineLight, faChartLine, faChartLineSolid);

// chart-pie
import { faChartPie as faChartPieLight } from '@fortawesome/pro-light-svg-icons/faChartPie';
import { faChartPie } from '@fortawesome/pro-regular-svg-icons/faChartPie';
import { faChartPie as faChartPieSolid } from '@fortawesome/pro-solid-svg-icons/faChartPie';
library.add(faChartPieLight, faChartPie, faChartPieSolid);

// check
import { faCheck as faCheckLight } from '@fortawesome/pro-light-svg-icons/faCheck';
import { faCheck } from '@fortawesome/pro-regular-svg-icons/faCheck';
import { faCheck as faCheckSolid } from '@fortawesome/pro-solid-svg-icons/faCheck';
library.add(faCogsLight, faCogs, faCogsSolid);

// check-square
import { faCheckSquare as faCheckSquareLight } from '@fortawesome/pro-light-svg-icons/faCheckSquare';
import { faCheckSquare } from '@fortawesome/pro-regular-svg-icons/faCheckSquare';
import { faCheckSquare as faCheckSquareSolid } from '@fortawesome/pro-solid-svg-icons/faCheckSquare';
library.add(faCheckLight, faCheck, faCheckSolid);

// chevron-double-down
import { faChevronDoubleDown as faChevronDoubleDownLight } from '@fortawesome/pro-light-svg-icons/faChevronDoubleDown';
import { faChevronDoubleDown } from '@fortawesome/pro-regular-svg-icons/faChevronDoubleDown';
import { faChevronDoubleDown as faChevronDoubleDownSolid } from '@fortawesome/pro-solid-svg-icons/faChevronDoubleDown';
library.add(faChevronDoubleDownLight, faChevronDoubleDown, faChevronDoubleDownSolid);

// chevron-double-left
import { faChevronDoubleLeft as faChevronDoubleLeftLight } from '@fortawesome/pro-light-svg-icons/faChevronDoubleLeft';
import { faChevronDoubleLeft } from '@fortawesome/pro-regular-svg-icons/faChevronDoubleLeft';
import { faChevronDoubleLeft as faChevronDoubleLeftSolid } from '@fortawesome/pro-solid-svg-icons/faChevronDoubleLeft';
library.add(faChevronDoubleLeftLight, faChevronDoubleLeft, faChevronDoubleLeftSolid);

// chevron-double-right
import { faChevronDoubleRight as faChevronDoubleRightLight } from '@fortawesome/pro-light-svg-icons/faChevronDoubleRight';
import { faChevronDoubleRight } from '@fortawesome/pro-regular-svg-icons/faChevronDoubleRight';
import { faChevronDoubleRight as faChevronDoubleRightSolid } from '@fortawesome/pro-solid-svg-icons/faChevronDoubleRight';
library.add(faChevronDoubleRightLight, faChevronDoubleRight, faChevronDoubleRightSolid);

// chevron-double-up
import { faChevronDoubleUp as faChevronDoubleUpLight } from '@fortawesome/pro-light-svg-icons/faChevronDoubleUp';
import { faChevronDoubleUp } from '@fortawesome/pro-regular-svg-icons/faChevronDoubleUp';
import { faChevronDoubleUp as faChevronDoubleUpSolid } from '@fortawesome/pro-solid-svg-icons/faChevronDoubleUp';
library.add(faChevronDoubleUpLight, faChevronDoubleUp, faChevronDoubleUpSolid);

// circle
import { faCircle as faCircleLight } from '@fortawesome/pro-light-svg-icons/faCircle';
import { faCircle } from '@fortawesome/pro-regular-svg-icons/faCircle';
import { faCircle as faCircleSolid } from '@fortawesome/pro-solid-svg-icons/faCircle';
library.add(faCheckSquareLight, faCheckSquare, faCheckSquareSolid);

// clipboard
import { faClipboard as faClipboardLight } from '@fortawesome/pro-light-svg-icons/faClipboard';
import { faClipboard } from '@fortawesome/pro-regular-svg-icons/faClipboard';
import { faClipboard as faClipboardSolid } from '@fortawesome/pro-solid-svg-icons/faClipboard';
library.add(faClipboardLight, faClipboard, faClipboardSolid);

// cogs
import { faCogs as faCogsLight } from '@fortawesome/pro-light-svg-icons/faCogs';
import { faCogs } from '@fortawesome/pro-regular-svg-icons/faCogs';
import { faCogs as faCogsSolid } from '@fortawesome/pro-solid-svg-icons/faCogs';
library.add(faCircleLight, faCircle, faCircleSolid);

// cubes
import { faCubes as faCubesLight } from '@fortawesome/pro-light-svg-icons/faCubes';
import { faCubes } from '@fortawesome/pro-regular-svg-icons/faCubes';
import { faCubes as faCubesSolid } from '@fortawesome/pro-solid-svg-icons/faCubes';
library.add(faCubesLight, faCubes, faCubesSolid);

// dot-circle
import { faDotCircle as faDotCircleLight } from '@fortawesome/pro-light-svg-icons/faDotCircle';
import { faDotCircle } from '@fortawesome/pro-regular-svg-icons/faDotCircle';
import { faDotCircle as faDotCircleSolid } from '@fortawesome/pro-solid-svg-icons/faDotCircle';
library.add(faDotCircleLight, faDotCircle, faDotCircleSolid);

// download
import { faDownload as faDownloadLight } from '@fortawesome/pro-light-svg-icons/faDownload';
import { faDownload } from '@fortawesome/pro-regular-svg-icons/faDownload';
import { faDownload as faDownloadSolid } from '@fortawesome/pro-solid-svg-icons/faDownload';
library.add(faDownloadLight, faDownload, faDownloadSolid);

// edit
import { faEdit as faEditLight } from '@fortawesome/pro-light-svg-icons/faEdit';
import { faEdit } from '@fortawesome/pro-regular-svg-icons/faEdit';
import { faEdit as faEditSolid } from '@fortawesome/pro-solid-svg-icons/faEdit';
library.add(faEditLight, faEdit, faEditSolid);

// ellipsis-h
import { faEllipsisH as faEllipsisHLight } from '@fortawesome/pro-light-svg-icons/faEllipsisH';
import { faEllipsisH } from '@fortawesome/pro-regular-svg-icons/faEllipsisH';
import { faEllipsisH as faEllipsisHSolid } from '@fortawesome/pro-solid-svg-icons/faEllipsisH';
library.add(faEllipsisHLight, faEllipsisH, faEllipsisHSolid);

// exchange-alt
import { faExchangeAlt as faExchangeAltLight } from '@fortawesome/pro-light-svg-icons/faExchangeAlt';
import { faExchangeAlt } from '@fortawesome/pro-regular-svg-icons/faExchangeAlt';
import { faExchangeAlt as faExchangeAltSolid } from '@fortawesome/pro-solid-svg-icons/faExchangeAlt';
library.add(faExchangeAltLight, faExchangeAlt, faExchangeAltSolid);

// exclamation-triangle
import { faExclamationTriangle as faExclamationTriangleLight } from '@fortawesome/pro-light-svg-icons/faExclamationTriangle';
import { faExclamationTriangle } from '@fortawesome/pro-regular-svg-icons/faExclamationTriangle';
import { faExclamationTriangle as faExclamationTriangleSolid } from '@fortawesome/pro-solid-svg-icons/faExclamationTriangle';
library.add(faExclamationTriangleLight, faExclamationTriangle, faExclamationTriangleSolid);

// eye
import { faEye as faEyeLight } from '@fortawesome/pro-light-svg-icons/faEye';
import { faEye } from '@fortawesome/pro-regular-svg-icons/faEye';
import { faEye as faEyeSolid } from '@fortawesome/pro-solid-svg-icons/faEye';
library.add(faEyeLight, faEye, faEyeSolid);

// file-alt
import { faFileAlt as faFileAltLight } from '@fortawesome/pro-light-svg-icons/faFileAlt';
import { faFileAlt } from '@fortawesome/pro-regular-svg-icons/faFileAlt';
import { faFileAlt as faFileAltSolid } from '@fortawesome/pro-solid-svg-icons/faFileAlt';
library.add(faFileAltLight, faFileAlt, faFileAltSolid);

// file-archive
import { faFileArchive as faFileArchiveLight } from '@fortawesome/pro-light-svg-icons/faFileArchive';
import { faFileArchive } from '@fortawesome/pro-regular-svg-icons/faFileArchive';
import { faFileArchive as faFileArchiveSolid } from '@fortawesome/pro-solid-svg-icons/faFileArchive';
library.add(faFileArchiveLight, faFileArchive, faFileArchiveSolid);

// file-excel
import { faFileExcel as faFileExcelLight } from '@fortawesome/pro-light-svg-icons/faFileExcel';
import { faFileExcel } from '@fortawesome/pro-regular-svg-icons/faFileExcel';
import { faFileExcel as faFileExcelSolid } from '@fortawesome/pro-solid-svg-icons/faFileExcel';
library.add(faFileExcelLight, faFileExcel, faFileExcelSolid);

// file-powerpoint
import { faFilePowerpoint as faFilePowerpointLight } from '@fortawesome/pro-light-svg-icons/faFilePowerpoint';
import { faFilePowerpoint } from '@fortawesome/pro-regular-svg-icons/faFilePowerpoint';
import { faFilePowerpoint as faFilePowerpointSolid } from '@fortawesome/pro-solid-svg-icons/faFilePowerpoint';
library.add(faFilePowerpointLight, faFilePowerpoint, faFilePowerpointSolid);

// file-pdf
import { faFilePdf as faFilePdfLight } from '@fortawesome/pro-light-svg-icons/faFilePdf';
import { faFilePdf } from '@fortawesome/pro-regular-svg-icons/faFilePdf';
import { faFilePdf as faFilePdfSolid } from '@fortawesome/pro-solid-svg-icons/faFilePdf';
library.add(faFilePdfLight, faFilePdf, faFilePdfSolid);

// file-word
import { faFileWord as faFileWordLight } from '@fortawesome/pro-light-svg-icons/faFileWord';
import { faFileWord } from '@fortawesome/pro-regular-svg-icons/faFileWord';
import { faFileWord as faFileWordSolid } from '@fortawesome/pro-solid-svg-icons/faFileWord';
library.add(faFileWordLight, faFileWord, faFileWordSolid);

// folder
import { faFolder as faFolderLight } from '@fortawesome/pro-light-svg-icons/faFolder';
import { faFolder } from '@fortawesome/pro-regular-svg-icons/faFolder';
import { faFolder as faFolderSolid } from '@fortawesome/pro-solid-svg-icons/faFolder';
library.add(faFolderLight, faFolder, faFolderSolid);

// gem
import { faGem as faGemLight } from '@fortawesome/pro-light-svg-icons/faGem';
import { faGem } from '@fortawesome/pro-regular-svg-icons/faGem';
import { faGem as faGemSolid } from '@fortawesome/pro-solid-svg-icons/faGem';
library.add(faGemLight, faGem, faGemSolid);

// globe
import { faGlobe as faGlobeLight } from '@fortawesome/pro-light-svg-icons/faGlobe';
import { faGlobe } from '@fortawesome/pro-regular-svg-icons/faGlobe';
import { faGlobe as faGlobeSolid } from '@fortawesome/pro-solid-svg-icons/faGlobe';
library.add(faGlobeLight, faGlobe, faGlobeSolid);

// home
import { faHome as faHomeLight } from '@fortawesome/pro-light-svg-icons/faHome';
import { faHome } from '@fortawesome/pro-regular-svg-icons/faHome';
import { faHome as faHomeSolid } from '@fortawesome/pro-solid-svg-icons/faHome';
library.add(faHomeLight, faHome, faHomeSolid);

// hourglass-start
import { faHourglassStart as faHourglassStartLight } from '@fortawesome/pro-light-svg-icons/faHourglassStart';
import { faHourglassStart } from '@fortawesome/pro-regular-svg-icons/faHourglassStart';
import { faHourglassStart as faHourglassStartSolid } from '@fortawesome/pro-solid-svg-icons/faHourglassStart';
library.add(faHourglassStartLight, faHourglassStart, faHourglassStartSolid);

// industry
import { faIndustry as faIndustryLight } from '@fortawesome/pro-light-svg-icons/faIndustry';
import { faIndustry } from '@fortawesome/pro-regular-svg-icons/faIndustry';
import { faIndustry as faIndustrySolid } from '@fortawesome/pro-solid-svg-icons/faIndustry';
library.add(faIndustryLight, faIndustry, faIndustrySolid);

// industry-alt
import { faIndustryAlt as faIndustryAltLight } from '@fortawesome/pro-light-svg-icons/faIndustryAlt';
import { faIndustryAlt } from '@fortawesome/pro-regular-svg-icons/faIndustryAlt';
import { faIndustryAlt as faIndustryAltSolid } from '@fortawesome/pro-solid-svg-icons/faIndustryAlt';
library.add(faIndustryAltLight, faIndustryAlt, faIndustryAltSolid);

// info-circle
import { faInfoCircle as faInfoCircleLight } from '@fortawesome/pro-light-svg-icons/faInfoCircle';
import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons/faInfoCircle';
import { faInfoCircle as faInfoCircleSolid } from '@fortawesome/pro-solid-svg-icons/faInfoCircle';
library.add(faInfoCircleLight, faInfoCircle, faInfoCircleSolid);

// list
import { faList as faListLight } from '@fortawesome/pro-light-svg-icons/faList';
import { faList } from '@fortawesome/pro-regular-svg-icons/faList';
import { faList as faListSolid } from '@fortawesome/pro-solid-svg-icons/faList';
library.add(faListLight, faList, faListSolid);

// lock
import { faLock as faLockLight } from '@fortawesome/pro-light-svg-icons/faLock';
import { faLock } from '@fortawesome/pro-regular-svg-icons/faLock';
import { faLock as faLockSolid } from '@fortawesome/pro-solid-svg-icons/faLock';
library.add(faLockLight, faLock, faLockSolid);

// lock-alt
import { faLockAlt as faLockAltLight } from '@fortawesome/pro-light-svg-icons/faLockAlt';
import { faLockAlt } from '@fortawesome/pro-regular-svg-icons/faLockAlt';
import { faLockAlt as faLockAltSolid } from '@fortawesome/pro-solid-svg-icons/faLockAlt';
library.add(faLockAltLight, faLockAlt, faLockAltSolid);

// lock-open
import { faLockOpen as faLockOpenLight } from '@fortawesome/pro-light-svg-icons/faLockOpen';
import { faLockOpen } from '@fortawesome/pro-regular-svg-icons/faLockOpen';
import { faLockOpen as faLockOpenSolid } from '@fortawesome/pro-solid-svg-icons/faLockOpen';
library.add(faLockOpenLight, faLockOpen, faLockOpenSolid);

// long-arrow-alt-down
import { faLongArrowAltDown as faLongArrowAltDownLight } from '@fortawesome/pro-light-svg-icons/faLongArrowAltDown';
import { faLongArrowAltDown } from '@fortawesome/pro-regular-svg-icons/faLongArrowAltDown';
import { faLongArrowAltDown as faLongArrowAltDownSolid } from '@fortawesome/pro-solid-svg-icons/faLongArrowAltDown';
library.add(faLongArrowAltDownLight, faLongArrowAltDown, faLongArrowAltDownSolid);

// long-arrow-alt-up
import { faLongArrowAltUp as faLongArrowAltUpLight } from '@fortawesome/pro-light-svg-icons/faLongArrowAltUp';
import { faLongArrowAltUp } from '@fortawesome/pro-regular-svg-icons/faLongArrowAltUp';
import { faLongArrowAltUp as faLongArrowAltUpSolid } from '@fortawesome/pro-solid-svg-icons/faLongArrowAltUp';
library.add(faLongArrowAltUpLight, faLongArrowAltUp, faLongArrowAltUpSolid);

// minus
import { faMinus as faMinusLight } from '@fortawesome/pro-light-svg-icons/faMinus';
import { faMinus } from '@fortawesome/pro-regular-svg-icons/faMinus';
import { faMinus as faMinusSolid } from '@fortawesome/pro-solid-svg-icons/faMinus';
library.add(faMinusLight, faMinus, faMinusSolid);

// minus-square
import { faMinusSquare as faMinusSquareLight } from '@fortawesome/pro-light-svg-icons/faMinusSquare';
import { faMinusSquare } from '@fortawesome/pro-regular-svg-icons/faMinusSquare';
import { faMinusSquare as faMinusSquareSolid } from '@fortawesome/pro-solid-svg-icons/faMinusSquare';
library.add(faMinusSquareLight, faMinusSquare, faMinusSquareSolid);

// plane
import { faPlane as faPlaneLight } from '@fortawesome/pro-light-svg-icons/faPlane';
import { faPlane } from '@fortawesome/pro-regular-svg-icons/faPlane';
import { faPlane as faPlaneSolid } from '@fortawesome/pro-solid-svg-icons/faPlane';
library.add(faPlaneLight, faPlane, faPlaneSolid);

// plus
import { faPlus as falPlus } from '@fortawesome/pro-light-svg-icons/faPlus';
import { faPlus as farPlus } from '@fortawesome/pro-regular-svg-icons/faPlus';
import { faPlus as fasPlus } from '@fortawesome/pro-solid-svg-icons/faPlus';
library.add(falPlus, farPlus, fasPlus);

// plus-circle
import { faPlusCircle as faPlusCircleLight } from '@fortawesome/pro-light-svg-icons/faPlusCircle';
import { faPlusCircle } from '@fortawesome/pro-regular-svg-icons/faPlusCircle';
import { faPlusCircle as faPlusCircleSolid } from '@fortawesome/pro-solid-svg-icons/faPlusCircle';
library.add(faPlusCircleLight, faPlusCircle, faPlusCircleSolid);

// plus-square
import { faPlusSquare as faPlusSquareLight } from '@fortawesome/pro-light-svg-icons/faPlusSquare';
import { faPlusSquare } from '@fortawesome/pro-regular-svg-icons/faPlusSquare';
import { faPlusSquare as faPlusSquareSolid } from '@fortawesome/pro-solid-svg-icons/faPlusSquare';
library.add(faPlusSquareLight, faPlusSquare, faPlusSquareSolid);

// question-circle
import { faQuestionCircle as faQuestionCircleLight } from '@fortawesome/pro-light-svg-icons/faQuestionCircle';
import { faQuestionCircle } from '@fortawesome/pro-regular-svg-icons/faQuestionCircle';
import { faQuestionCircle as faQuestionCircleSolid } from '@fortawesome/pro-solid-svg-icons/faQuestionCircle';
library.add(faQuestionCircleLight, faQuestionCircle, faQuestionCircleSolid);

// redo-alt
import { faRedoAlt as faRedoAltLight } from '@fortawesome/pro-light-svg-icons/faRedoAlt';
import { faRedoAlt } from '@fortawesome/pro-regular-svg-icons/faRedoAlt';
import { faRedoAlt as faRedoAltSolid } from '@fortawesome/pro-solid-svg-icons/faRedoAlt';
library.add(faRedoAltLight, faRedoAlt, faRedoAltSolid);

// reply
import { faReply as faReplyLight } from '@fortawesome/pro-light-svg-icons/faReply';
import { faReply } from '@fortawesome/pro-regular-svg-icons/faReply';
import { faReply as faReplySolid } from '@fortawesome/pro-solid-svg-icons/faReply';
library.add(faReplyLight, faReply, faReplySolid);

// save
import { faSave as faSaveLight } from '@fortawesome/pro-light-svg-icons/faSave';
import { faSave } from '@fortawesome/pro-regular-svg-icons/faSave';
import { faSave as faSaveSolid } from '@fortawesome/pro-solid-svg-icons/faSave';
library.add(faSaveLight, faSave, faSaveSolid);

// search
import { faSearch as faSearchLight } from '@fortawesome/pro-light-svg-icons/faSearch';
import { faSearch } from '@fortawesome/pro-regular-svg-icons/faSearch';
import { faSearch as faSearchSolid } from '@fortawesome/pro-solid-svg-icons/faSearch';
library.add(faSearchLight, faSearch, faSearchSolid);

// shield-check
import { faShieldCheck as faShieldCheckLight } from '@fortawesome/pro-light-svg-icons/faShieldCheck';
import { faShieldCheck } from '@fortawesome/pro-regular-svg-icons/faShieldCheck';
import { faShieldCheck as faShieldCheckSolid } from '@fortawesome/pro-solid-svg-icons/faShieldCheck';
library.add(faShieldCheckLight, faShieldCheck, faShieldCheckSolid);

// ship
import { faShip as faShipLight } from '@fortawesome/pro-light-svg-icons/faShip';
import { faShip } from '@fortawesome/pro-regular-svg-icons/faShip';
import { faShip as faShipSolid } from '@fortawesome/pro-solid-svg-icons/faShip';
library.add(faShipLight, faShip, faShipSolid);

// sign-in-alt
import { faSignInAlt as faSignInAltLight } from '@fortawesome/pro-light-svg-icons/faSignInAlt';
import { faSignInAlt } from '@fortawesome/pro-regular-svg-icons/faSignInAlt';
import { faSignInAlt as faSignInAltSolid } from '@fortawesome/pro-solid-svg-icons/faSignInAlt';
library.add(faSignInAltLight, faSignInAlt, faSignInAltSolid);

// sign-out-alt
import { faSignOutAlt as faSignOutAltLight } from '@fortawesome/pro-light-svg-icons/faSignOutAlt';
import { faSignOutAlt } from '@fortawesome/pro-regular-svg-icons/faSignOutAlt';
import { faSignOutAlt as faSignOutAltSolid } from '@fortawesome/pro-solid-svg-icons/faSignOutAlt';
library.add(faSignOutAltLight, faSignOutAlt, faSignOutAltSolid);

// sort-amount-down
import { faSortAmountDown as faSortAmountDownLight } from '@fortawesome/pro-light-svg-icons/faSortAmountDown';
import { faSortAmountDown } from '@fortawesome/pro-regular-svg-icons/faSortAmountDown';
import { faSortAmountDown as faSortAmountDownSolid } from '@fortawesome/pro-solid-svg-icons/faSortAmountDown';
library.add(faSortAmountDownLight, faSortAmountDown, faSortAmountDownSolid);

// spinner-third
import { faSpinnerThird as faSpinnerThirdLight } from '@fortawesome/pro-light-svg-icons/faSpinnerThird';
import { faSpinnerThird } from '@fortawesome/pro-regular-svg-icons/faSpinnerThird';
import { faSpinnerThird as faSpinnerThirdSolid } from '@fortawesome/pro-solid-svg-icons/faSpinnerThird';
library.add(faSpinnerThirdLight, faSpinnerThird, faSpinnerThirdSolid);

// square
import { faSquare as faSquareLight } from '@fortawesome/pro-light-svg-icons/faSquare';
import { faSquare } from '@fortawesome/pro-regular-svg-icons/faSquare';
import { faSquare as faSquareSolid } from '@fortawesome/pro-solid-svg-icons/faSquare';
library.add(faSquareLight, faSquare, faSquareSolid);

// star
import { faStar as faStarLight } from '@fortawesome/pro-light-svg-icons/faStar';
import { faStar } from '@fortawesome/pro-regular-svg-icons/faStar';
import { faStar as faStarSolid } from '@fortawesome/pro-solid-svg-icons/faStar';
library.add(faStarLight, faStar, faStarSolid);

// th
import { faTh as faThLight } from '@fortawesome/pro-light-svg-icons/faTh';
import { faTh } from '@fortawesome/pro-regular-svg-icons/faTh';
import { faTh as faThSolid } from '@fortawesome/pro-solid-svg-icons/faTh';
library.add(faThLight, faTh, faThSolid);

// thumbs-up
import { faThumbsUp as faThumbsUpLight } from '@fortawesome/pro-light-svg-icons/faThumbsUp';
import { faThumbsUp } from '@fortawesome/pro-regular-svg-icons/faThumbsUp';
import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/pro-solid-svg-icons/faThumbsUp';
library.add(faThumbsUpLight, faThumbsUp, faThumbsUpSolid);

// times
import { faTimes as faTimesLight } from '@fortawesome/pro-light-svg-icons/faTimes';
import { faTimes } from '@fortawesome/pro-regular-svg-icons/faTimes';
import { faTimes as faTimesSolid } from '@fortawesome/pro-solid-svg-icons/faTimes';
library.add(faTimesLight, faTimes, faTimesSolid);

// times-square
import { faTimesSquare as faTimesSquareLight } from '@fortawesome/pro-light-svg-icons/faTimesSquare';
import { faTimesSquare } from '@fortawesome/pro-regular-svg-icons/faTimesSquare';
import { faTimesSquare as faTimesSquareSolid } from '@fortawesome/pro-solid-svg-icons/faTimesSquare';
library.add(faTimesSquareLight, faTimesSquare, faTimesSquareSolid);

// tint
import { faTint as faTintLight } from '@fortawesome/pro-light-svg-icons/faTint';
import { faTint } from '@fortawesome/pro-regular-svg-icons/faTint';
import { faTint as faTintSolid } from '@fortawesome/pro-solid-svg-icons/faTint';
library.add(faTintLight, faTint, faTintSolid);

// trash-alt
import { faTrashAlt as faTrashAltLight } from '@fortawesome/pro-light-svg-icons/faTrashAlt';
import { faTrashAlt } from '@fortawesome/pro-regular-svg-icons/faTrashAlt';
import { faTrashAlt as faTrashAltSolid } from '@fortawesome/pro-solid-svg-icons/faTrashAlt';
library.add(faTrashAltLight, faTrashAlt, faTrashAltSolid);

// truck
import { faTruck as faTruckLight } from '@fortawesome/pro-light-svg-icons/faTruck';
import { faTruck } from '@fortawesome/pro-regular-svg-icons/faTruck';
import { faTruck as faTruckSolid } from '@fortawesome/pro-solid-svg-icons/faTruck';
library.add(faTruckLight, faTruck, faTruckSolid);

// undo-alt
import { faUndoAlt as faUndoAltLight } from '@fortawesome/pro-light-svg-icons/faUndoAlt';
import { faUndoAlt } from '@fortawesome/pro-regular-svg-icons/faUndoAlt';
import { faUndoAlt as faUndoAltSolid } from '@fortawesome/pro-solid-svg-icons/faUndoAlt';
library.add(faUndoAltLight, faUndoAlt, faUndoAltSolid);

// unlock
import { faUnlock as faUnlockLight } from '@fortawesome/pro-light-svg-icons/faUnlock';
import { faUnlock } from '@fortawesome/pro-regular-svg-icons/faUnlock';
import { faUnlock as faUnlockSolid } from '@fortawesome/pro-solid-svg-icons/faUnlock';
library.add(faUnlockLight, faUnlock, faUnlockSolid);

// user-circle
import { faUserCircle as faUserCircleLight } from '@fortawesome/pro-light-svg-icons/faUserCircle';
import { faUserCircle } from '@fortawesome/pro-regular-svg-icons/faUserCircle';
import { faUserCircle as faUserCircleSolid } from '@fortawesome/pro-solid-svg-icons/faUserCircle';
library.add(faUserCircleLight, faUserCircle, faUserCircleSolid);

// users
import { faUsers as faUsersLight } from '@fortawesome/pro-light-svg-icons/faUsers';
import { faUsers } from '@fortawesome/pro-regular-svg-icons/faUsers';
import { faUsers as faUsersSolid } from '@fortawesome/pro-solid-svg-icons/faUsers';
library.add(faUsersLight, faUsers, faUsersSolid);

// windows
import { faWindows } from '@fortawesome/free-brands-svg-icons/faWindows';
library.add(faWindows);


/*
 * Render a FontAwesomeIcon.
 * We want to limit the FontAwesome imports to this file so that we can limit our bundle size.
 */
const AppIconFontAwesome = (props) => {
  const { style, includeMarginLeft, includeMarginRight, ...otherProps } = props;

  return (
    <FontAwesomeIcon
      {...otherProps}
      style={{
        ...style,
        marginLeft: props.includeMarginLeft && '6px',
        marginRight: props.includeMarginRight && '6px',
      }}
    />
  );
};

export default AppIconFontAwesome;
