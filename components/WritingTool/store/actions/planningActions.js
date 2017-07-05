/**
 * Created by benjaminafonso on 26/06/2017.
 */

import settings_en from '../../assets/settings_en.json'

export function usePreset (dispatch, preset) {
  const settings = settings_en

  if (settings[preset]) {
    dispatch(setWritingType(settings[preset].title, settings[preset].icon, settings[preset].needsTitle))
    settings[preset].fields.map(field => {
      dispatch(
        newField(
          field.title,
          field.type,
          field.numberOfFields,
          field.numberPerRow,
          field.overloadable,
          field.removeable,
          [...Array(field.numberOfFields)].map((field, index) => {
            return {index: index, value: ''}
          })
        )
      )
    })
  }
}

export function setWritingType (title, icon = '', needsTitle = true) {
  return {
    type: 'SET_WRITING_TYPE',
    payload: {
      title: title,
      icon: icon,
      needsTitle: needsTitle
    }
  }
}

export function setInformations (image, description) {
  return {
    type: 'SET_INFORMATIONS',
    payload: {
      image: image,
      description: description
    }
  }
}

export function savePlanningLocalStorage () {
  return {
    type: 'SAVE_PLANNING_LOCALSTORAGE'
  }
}

export function loadPlanningLocalstorage (dispatch) {
  var planning = window.localStorage.getItem('nzk-planning')
  if (planning) {
    loadPlanning(dispatch, JSON.parse(planning))
  }
}

export function removeFields () {
  return {
    type: 'REMOVE_FIELDS'
  }
}

export function loadPlanning (dispatch, planning) {
  dispatch(removeFields())
  dispatch(setWritingType(planning.title, planning.icon))
  planning.fields.map((field, i) => {
    dispatch(
      newField(
        field.title,
        field.type,
        field.numberOfFields,
        field.numberPerRow,
        field.overloadable,
        field.removeable,
        planning.fields[i].fields
      )
    )
  })
}

export function newField (title,
                         type,
                         nbFields,
                         nbFieldsPerRow,
                         overloadable,
                         removeable,
                         fields) {
  return {
    type: 'NEW_FIELD',
    payload: {
      key: title,
      title: title,
      type: type,
      nbFields: nbFields,
      nbFieldsPerRow: nbFieldsPerRow,
      overloadable: overloadable,
      removeable: removeable,
      fields: fields
    }
  }
}

export function removeInput (fieldIndex, index) {
  return {
    type: 'REMOVE_INPUT_FIELD',
    payload: {
      fieldIndex: fieldIndex,
      index: index
    }
  }
}

export function addInput (fieldIndex) {
  return {
    type: 'ADD_INPUT_FIELD',
    payload: {
      fieldIndex: fieldIndex
    }
  }
}

export function fieldChanged (fieldIndex, inputIndex, newValue) {
  return {
    type: 'FIELD_CHANGED',
    payload: {
      fieldIndex: fieldIndex,
      inputIndex: inputIndex,
      newValue: newValue
    }
  }
}