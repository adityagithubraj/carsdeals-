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
      className="filter-modal"
    >
      <form onSubmit={onFormSubmit}>
        <fieldset className="my-3 md:my-5">
          <label className="rufina text-base md:text-2xl font-bold	">
            {" "}
            Registration Year
          </label>
          <ul class="radioinput-list flex flex-wrap mt-2 md:mt-5 gap-x-1 gap-y-4 md:gap-x-3">
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
                    className="cursor-pointer px-4 py-2 text-sm md:text-xl bg-[#CAFFAE] rounded-lg"
                  >
                    {year}
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>
        <fieldset className="my-3 md:my-5">
          <label className="rufina text-base md:text-2xl font-bold	">
            Kms Driven
          </label>
          <ul class="radioinput-list flex flex-wrap mt-2 md:mt-5 gap-x-1 gap-y-4 md:gap-x-3">
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
                    className="cursor-pointer px-4 py-2 text-sm md:text-xl bg-[#CAFFAE] rounded-lg"
                  >
                    {km}
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>
        <fieldset className="my-3 md:my-5">
          <label className="rufina text-base md:text-2xl font-bold	">
            Budget
          </label>
          <ul class="radioinput-list flex flex-wrap mt-2 md:mt-5 gap-x-1 gap-y-4 md:gap-x-3">
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
                    className="cursor-pointer px-4 py-2 text-sm md:text-xl bg-[#CAFFAE] rounded-lg"
                  >
                    {item}
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>
        <fieldset className="my-3 md:my-5">
          <label className="rufina text-base md:text-2xl font-bold	">
            Body Type
          </label>
          <ul class="radioinput-list flex flex-wrap mt-2 md:mt-5 gap-x-1 gap-y-4 md:gap-x-3">
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
                    className="cursor-pointer px-4 py-2 text-sm md:text-xl bg-[#CAFFAE] rounded-lg"
                  >
                    {type}
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>
        <Button
          type="primary"
          htmlType="submit"
          className="w-full bg-black hover:bg-[#CAFFAE] md:pt-3 md:pb-9 mt-1 md:mt-5 rounded-[10px] lg:text-2xl lg:pb-[45px] modal-filter"
        >
          Apply Filters
        </Button>
      </form>
    </Modal>
  );
}

export default FilterModal;
