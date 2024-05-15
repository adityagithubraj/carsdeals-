import React from "react";
import { Modal, Button } from "antd";
import {
  regYears,
  kmsDriven,
  budget,
  bodyTypes,
  brands,
} from "../../constants/PopUpFilterValues";

function FilterModal({ onFormSubmit, visibility, cancelHandler }) {
  return (
    <Modal
      visible={visibility}
      onCancel={cancelHandler}
      footer={null}
      width="auto"
      centered
    >
      <form onSubmit={onFormSubmit}>
        <fieldset>
          <label className="rufina text-2xl font-bold	">
            {" "}
            Registration Year
          </label>
          <ul class="radioinput-list flex mt-3 gap-x-3">
            {regYears.map((year, index) => {
              return (
                <li key={index} className="relative">
                  <input
                    type="radio"
                    name="registration"
                    id=""
                    value={year}
                    className="filter w-full opacity-0	absolute cursor-pointer h-full"
                  />
                  <label
                    for="reg"
                    className="cursor-pointer px-3 py-1 text-xl bg-[#CAFFAE] rounded-lg"
                  >
                    {year}
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>
        <fieldset className="my-">
          <label className="rufina text-2xl font-bold	">Kms Driven</label>
          <ul class="radioinput-list flex mt-3 gap-x-3">
            {kmsDriven.map((km, index) => {
              return (
                <li key={index} className="relative">
                  <input
                    type="radio"
                    name="kmsdriven"
                    id=""
                    value={km}
                    className="filter w-full opacity-0	absolute cursor-pointer h-full"
                  />
                  <label
                    for="reg"
                    className="cursor-pointer px-3 py-1 text-xl bg-[#CAFFAE] rounded-lg"
                  >
                    {km}
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>
        <fieldset className="my-">
          <label className="rufina text-2xl font-bold	">Budget</label>
          <ul class="radioinput-list flex mt-3 gap-x-3">
            {budget.map((item, index) => {
              return (
                <li key={index} className="relative">
                  <input
                    type="radio"
                    name="budget"
                    id=""
                    value={item}
                    className="filter w-full opacity-0	absolute cursor-pointer h-full"
                  />
                  <label
                    for="reg"
                    className="cursor-pointer px-3 py-1 text-xl bg-[#CAFFAE] rounded-lg"
                  >
                    {item}
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>
        <fieldset className="my-">
          <label className="rufina text-2xl font-bold	">Body Type</label>
          <ul class="radioinput-list flex mt-3 gap-x-3">
            {bodyTypes.map((type, index) => {
              return (
                <li key={index} className="relative">
                  <input
                    type="radio"
                    name="body_type"
                    id=""
                    value={type}
                    className="filter w-full opacity-0	absolute cursor-pointer h-full"
                  />
                  <label
                    for="reg"
                    className="cursor-pointer px-3 py-1 text-xl bg-[#CAFFAE] rounded-lg"
                  >
                    {type}
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>
        {/* <fieldset className="my-3">
          <label className="rufina text-2xl font-bold	">Select Brand</label>{" "}
          <br />
          <select className="w-full text-xl border-2 rounded-sm mt-1" >
            {brands.map((brand, index) => {
              return <option key={index}>{brand} </option>;
            })}
          </select>
        </fieldset> */}

        <Button
          type="primary"
          htmlType="submit"
          className="w-full bg-black pt-3 pb-9 mt-5 rounded-[10px]"
        >
          Apply Filters
        </Button>
      </form>
    </Modal>
  );
}

export default FilterModal;
