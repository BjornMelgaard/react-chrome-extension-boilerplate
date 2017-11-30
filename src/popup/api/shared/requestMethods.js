import { API_HOST } from '../../config'

export function post(url, params, headers) {
  return $.ajax({
    method:   'POST',
    url:      API_HOST + url,
    data:     params,
    dataType: 'json',
    headers:  headers,
  })
}

export function get(url, headers) {
  return $.ajax({
    method:  'GET',
    url:     API_HOST + url,
    headers: headers,
  })
}

export function del(url, headers) {
  return $.ajax({
    method:  'DELETE',
    url:     API_HOST + url,
    headers: headers,
  })
}
