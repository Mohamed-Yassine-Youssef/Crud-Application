$("#add_user").submit(function (event) {
  alert("data inserted successfelly!");
});

// update user
$("#update_user").submit(function (event) {
  event.preventDefault();
  var unindexed_array = $(this).serializeArray();
  var data = {};
  $.map(unindexed_array, function (item, index) {
    data[item["name"]] = item["value"];
  });
  console.log(data);
  var request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };
  $.ajax(request).done(function (response) {
    alert("data updated successfully");
  });
});
//Delete user
if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function (event) {
    var id = $(this).attr("data-id");
    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };
    if (confirm("do you realy want to delete this user?")) {
      $.ajax(request).done(function (response) {
        alert("data deleted successfully");
        location.reload();
      });
    }
  });
}
