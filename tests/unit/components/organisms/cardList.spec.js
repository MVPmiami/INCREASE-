import React from "react";
import CardList from "../../../../src/components/organisms/CardList/component";

const setUp = (props) => shallow(<CardList {...props} />);

let persons = [
  {
    char_id: 1,
    name: "Walter White",
    birthday: "09-07-1958",
    occupation: ["High School Chemistry Teacher", "Meth King Pin"],
    img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    status: "Presumed dead",
    nickname: "Heisenberg",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "Bryan Cranston",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
  {
    char_id: 2,
    name: "Jesse Pinkman",
    birthday: "09-24-1984",
    occupation: ["Meth Dealer"],
    img: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
    status: "Alive",
    nickname: "Cap n' Cook",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "Aaron Paul",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
  {
    char_id: 3,
    name: "Skyler White",
    birthday: "08-11-1970",
    occupation: [
      "House wife",
      "Book Keeper",
      "Car Wash Manager",
      "Taxi Dispatcher",
    ],
    img: "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
    status: "Alive",
    nickname: "Sky",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "Anna Gunn",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
  {
    char_id: 4,
    name: "Walter White Jr.",
    birthday: "07-08-1993",
    occupation: ["Teenager"],
    img: "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
    status: "Alive",
    nickname: "Flynn",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "RJ Mitte",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
  {
    char_id: 5,
    name: "Henry Schrader",
    birthday: "Unknown",
    occupation: ["DEA Agent"],
    img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136",
    status: "Deceased",
    nickname: "Hank",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "Dean Norris",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
];

describe("should render CardList component with CadrForList", () => {
  let isList = true;
  let component;
  beforeEach(() => {
    component = setUp({ persons, isList });
  });

  it("should contain CardForList", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("should render CardList component with Card", () => {
  let component;
  let isList = false;
  beforeEach(() => {
    component = setUp({ persons, isList });
  });

  it("should contain Card", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("should render CardList component with ErrorMessage", () => {
  let component;
  let isList = false;
  let isError = true;
  beforeEach(() => {
    component = setUp({ persons, isList, isError });
  });

  it("should contain ErrorMessage", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("should render CardList component with Loader", () => {
  let component;
  let isList = false;
  let isError = false;
  let isLoader = true;
  beforeEach(() => {
    component = setUp({ persons, isList, isError, isLoader });
  });

  it("should contain Loader", () => {
    expect(component).toMatchSnapshot();
  });
});
