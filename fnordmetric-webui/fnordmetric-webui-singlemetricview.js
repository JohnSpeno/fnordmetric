/**
 * This file is part of the "FnordMetric" project
 *   Copyright (c) 2014 Laura Schlimmer
 *   Copyright (c) 2014 Paul Asmuth, Google Inc.
 *
 * FnordMetric is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License v3.0. You should have received a
 * copy of the GNU General Public License along with this program. If not, see
 * <http://www.gnu.org/licenses/>.
 */
if (FnordMetric === undefined) {
  FnordMetric = {};
}

if (FnordMetric.views === undefined) {
  FnordMetric.views = {};
}


FnordMetric.util.singleMetricView = function() {
  function render(elem, query_params) {
    /* set url and push history state */
    FnordMetric.util.setURLQueryString(
      query_params.name, query_params.value, false, true);
    elem.innerHTML = "";

    FnordMetric.util.renderPageHeader(
      "Metric &rsaquo; <em>" + 
      FnordMetric.util.htmlEscape(query_params.value) + 
      "</em>", elem);

    var editor_btn = FnordMetric.createButton(
      "#", undefined, "Open in Query Editor");
    elem.appendChild(editor_btn);

    editor_btn.onclick = function(e) {
      e.preventDefault();
      var query = 
        "SELECT * FROM `" + query_params.value + "` LIMIT 100;";
      FnordMetric.util.setFragmentURL(
        "query_playground", "sql_query", query, true);
      //FIXME --> openUrl
      location.reload();
    }

    FnordMetric.util.MetricPreviewWidget().render(
      elem, query_params.value);

  }

  return {
    "render" : render
  }
}
