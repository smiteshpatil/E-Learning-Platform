import axios from "axios";
import thumbnail from "../images/card1.jpg";
const baseUrl = "http://localhost:8080";

// launch new course
export const createNewCourse = async (newCourse, bearerToken) => {
  try {
    const response = await axios.post(baseUrl + "/courses/add", newCourse, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

//newCourse ==> courseName, courseDescription
export const createDummyCourse = async (newCourse) => {
  let dummyCourse = {
    courseName: newCourse.courseName,
    description: newCourse.description,
  };
  try {
    const response = await axios.post(baseUrl + "/courses/add", dummyCourse);
    console.log("In courseService :", response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

//add new Content by sectionId
//newContent ==> contentNo, contentName, contentUrl
export const addNewContent = async (sectionId, newContent) => {
  try {
    const response = await axios.post(
      baseUrl + `/contents/${sectionId}`,
      newContent
    );
    console.table(response);
  } catch (err) {
    console.log(err);
  }
};

//populated courses
export const courses = [
  {
    id: 1,
    thumbnail: thumbnail,
    title: "Web Development",
    description:
      "Web development course by smitesh patil. Learn from the best of the bestLearn from the best of the best Learn from the best of the best Learn from the best of the best.",
    author: {
      profilePicture: {
        url: thumbnail,
      },
    },
    datePublished: "Mar 15, 2024",
    courseUrl: "https://google.com",
    price: 123,
  },
  {
    id: 2,
    thumbnail: thumbnail,
    title: "JavaScript",
    description:
      "Javascript course by smitesh patil. Learn from the best of the best Learn from the best of the best Learn from the best of the best.",
    author: {
      profilePicture: {
        url: thumbnail,
      },
    },
    datePublished: "Mar 15, 2024",
    courseUrl: "https://google.com",
    price: 456,
  },
  {
    id: 3,
    thumbnail: thumbnail,
    title: "jQuery",
    description:
      "jQuery course by smitesh patil. Learn from the best of the best Learn from the best of the best Learn from the best of the best.",
    author: {
      profilePicture: {
        url: thumbnail,
      },
    },
    datePublished: "Mar 15, 2024",
    courseUrl: "https://google.com",
    price: 789,
  },
  {
    id: 4,
    thumbnail: thumbnail,
    title: "HTML5",
    description:
      "HTML5 course by smitesh patil. Learn from the best of the best Learn from the best of the best Learn from the best of the best.",
    author: {
      profilePicture: {
        url: thumbnail,
      },
    },
    datePublished: "Mar 15, 2024",
    courseUrl: "https://google.com",
    price: 987,
  },
  {
    id: 5,
    thumbnail: thumbnail,
    title: "Bootstrap",
    description:
      "Bootstrap course by smitesh patil. Learn from the best of the best Learn from the best of the best Learn from the best of the best.",
    author: {
      profilePicture: {
        url: thumbnail,
      },
    },
    datePublished: "Mar 15, 2024",
    courseUrl: "https://google.com",
    price: 654,
  },
];

//handle addNewContent
export const addContentService = (newContent) => {
  content.push(newContent);
  console.log("content with id", newContent.id, "Added");
};

//handle content delete
export const deleteContentService = (contentId) => {
  // Use filter to create a new array without the content with the given id
  content = content.filter((curr) => curr.id !== contentId);
  console.log("content with id", contentId, "deleted");
};

export let content = [
  {
    id: 1,
    contentName: "Name of the lecture 1",
    description:
      "video description goes here and this can be changed later. asdkjffhfuiflfguewlfyweg",
    videoUrl:
      "https://www.dropbox.com/scl/fi/hldrytn68bochhie8zpm4/20220602_152154.mp4?rlkey=e219id7vkdjp4zjq1aqf0s37i&raw=1",
  },
  {
    id: 2,
    contentName: "Name of the lecture 2",
    description:
      "video description goes here and this can be changed later. asdkjffhfuiflfguewlfyweg",
    videoUrl:
      "https://www.dropbox.com/scl/fi/tdt5pwmfy1axl039ucmzt/09bd3cf8c4704199bd605661bf955e36.mp4?rlkey=r4d7yk5wnyvzvz2n4xwruw8c1&raw=1",
  },
  {
    id: 3,
    contentName: "Name of the lecture 3",
    description:
      "video description goes here and this can be changed later. asdkjffhfuiflfguewlfyweg",
    videoUrl:
      "https://www.dropbox.com/scl/fi/hldrytn68bochhie8zpm4/20220602_152154.mp4?rlkey=e219id7vkdjp4zjq1aqf0s37i&raw=1",
  },
  {
    id: 4,
    contentName: "Name of the lecture 4",
    description:
      "video description goes here and this can be changed later. asdkjffhfuiflfguewlfyweg",
    videoUrl: "",
  },
  {
    id: 5,
    contentName: "Name of the lecture 5",
    description:
      "video description goes here and this can be changed later. asdkjffhfuiflfguewlfyweg",
    videoUrl: "",
  },
];
