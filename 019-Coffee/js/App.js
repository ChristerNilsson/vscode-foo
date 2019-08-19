// Generated by CoffeeScript 2.3.2
var URL, contributors, repo, repos, view;

URL = "https://api.github.com/orgs/HackYourFuture/repos?per_page=100";

repos = null;

repo = null;

contributors = [];

fetch(URL).then((response) => {
  return response.json();
}).then((json) => {
  repos = json;
  repos.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  print(repos);
  repo = repos[0];
  return fetch(repo.contributors_url).then((response) => {
    return response.json();
  }).then((json) => {
    contributors = json;
    return view(0);
  });
});

view = function(repoNr) {
  document.body.innerHTML = ''; // BAD!
  return body(function() {
    header({
      class: "header"
    }, function() {
      var select0;
      p({
        text: "HYF Repositories"
      });
      select0 = select({
        class: "repo-selector",
        "aria-label": "HYF Repositories"
      }, function() {
        var i, key, len, repo1, results;
        results = [];
        for (key = i = 0, len = repos.length; i < len; key = ++i) {
          repo1 = repos[key];
          results.push(option({
            text: repo1.name,
            value: key
          }));
        }
        return results;
      });
      select0.value = repoNr;
      return select0.onchange = () => {
        repo = repos[select0.value];
        return fetch(repo.contributors_url).then((response) => {
          return response.json();
        }).then((json) => {
          contributors = json;
          return view(select0.value);
        });
      };
    });
    return div({
      id: 'container'
    }, function() {
      div({
        class: "left-div whiteframe"
      }, function() {
        return table({}, function() {
          return tbody({}, function() {
            tr({}, function() {
              td({
                text: "Repository"
              });
              return td({}, function() {
                return a({
                  text: repo.name,
                  href: repo.html_url,
                  target: "_blank"
                });
              });
            });
            tr({}, function() {
              td({
                text: 'Description'
              });
              return td({
                text: repo.description
              });
            });
            tr({}, function() {
              td({
                text: 'Forks'
              });
              return td({
                text: repo.forks
              });
            });
            return tr({}, function() {
              td({
                text: 'Updated'
              });
              return td({
                text: new Date(repo.updated_at).toLocaleString('sv')
              });
            });
          });
        });
      });
      return div({
        class: "right-div whiteframe"
      }, function() {
        p({
          text: "Contributions",
          class: "contributor-header"
        });
        return ul({
          class: "contributor-list"
        }, function() {
          var contributor, i, len, li0, results;
          results = [];
          for (i = 0, len = contributors.length; i < len; i++) {
            contributor = contributors[i];
            li0 = li({
              class: "contributor-item",
              "aria-label": contributor.login,
              tabindex: 0
            }, function() {
              img({
                src: contributor.avatar_url,
                height: 48,
                class: "contributor-avatar"
              });
              return div({
                class: "contributor-data"
              }, function() {
                div({
                  text: contributor.login
                });
                return div({
                  text: contributor.contributions,
                  class: "contributor-badge"
                });
              });
            });
            results.push(((contributor) => {
              li0.onclick = () => {
                return window.open(contributor.html_url, "_blank");
              };
              return li0.onkeyup = function(t) {
                if (t.key === 'Enter') {
                  return window.open(contributor.html_url, "_blank");
                }
              };
            })(contributor));
          }
          return results;
        });
      });
    });
  });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXEFwcC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsR0FBQSxFQUFBLFlBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBOztBQUFBLEdBQUEsR0FBTTs7QUFFTixLQUFBLEdBQVE7O0FBQ1IsSUFBQSxHQUFPOztBQUNQLFlBQUEsR0FBZTs7QUFFZixLQUFBLENBQU0sR0FBTixDQUNDLENBQUMsSUFERixDQUNPLENBQUMsUUFBRCxDQUFBLEdBQUE7U0FBYyxRQUFRLENBQUMsSUFBVCxDQUFBO0FBQWQsQ0FEUCxDQUVDLENBQUMsSUFGRixDQUVPLENBQUMsSUFBRCxDQUFBLEdBQUE7RUFDTCxLQUFBLEdBQVE7RUFDUixLQUFLLENBQUMsSUFBTixDQUFXLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBQSxHQUFBO1dBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFQLENBQXFCLENBQUMsQ0FBQyxJQUF2QjtFQUFULENBQVg7RUFDQSxLQUFBLENBQU0sS0FBTjtFQUNBLElBQUEsR0FBTyxLQUFNLENBQUEsQ0FBQTtTQUNiLEtBQUEsQ0FBTSxJQUFJLENBQUMsZ0JBQVgsQ0FDQyxDQUFDLElBREYsQ0FDTyxDQUFDLFFBQUQsQ0FBQSxHQUFBO1dBQWMsUUFBUSxDQUFDLElBQVQsQ0FBQTtFQUFkLENBRFAsQ0FFQyxDQUFDLElBRkYsQ0FFTyxDQUFDLElBQUQsQ0FBQSxHQUFBO0lBQ0wsWUFBQSxHQUFlO1dBQ2YsSUFBQSxDQUFLLENBQUw7RUFGSyxDQUZQO0FBTEssQ0FGUDs7QUFhQSxJQUFBLEdBQU8sUUFBQSxDQUFDLE1BQUQsQ0FBQTtFQUNOLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBZCxHQUEwQixHQUExQjtTQUNBLElBQUEsQ0FBSyxRQUFBLENBQUEsQ0FBQTtJQUNKLE1BQUEsQ0FBTztNQUFFLEtBQUEsRUFBUTtJQUFWLENBQVAsRUFBNkIsUUFBQSxDQUFBLENBQUE7QUFDNUIsVUFBQTtNQUFBLENBQUEsQ0FBRTtRQUFFLElBQUEsRUFBTztNQUFULENBQUY7TUFDQSxPQUFBLEdBQVUsTUFBQSxDQUFPO1FBQUUsS0FBQSxFQUFRLGVBQVY7UUFBMkIsWUFBQSxFQUFlO01BQTFDLENBQVAsRUFBdUUsUUFBQSxDQUFBLENBQUE7QUFDaEYsWUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxLQUFBLEVBQUE7QUFBQTtRQUFBLEtBQUEsbURBQUE7O3VCQUNDLE1BQUEsQ0FBTztZQUFFLElBQUEsRUFBTyxLQUFLLENBQUMsSUFBZjtZQUFxQixLQUFBLEVBQVE7VUFBN0IsQ0FBUDtRQURELENBQUE7O01BRGdGLENBQXZFO01BR1YsT0FBTyxDQUFDLEtBQVIsR0FBZ0I7YUFDaEIsT0FBTyxDQUFDLFFBQVIsR0FBbUIsQ0FBQSxDQUFBLEdBQUE7UUFDbEIsSUFBQSxHQUFPLEtBQU0sQ0FBQSxPQUFPLENBQUMsS0FBUjtlQUNiLEtBQUEsQ0FBTSxJQUFJLENBQUMsZ0JBQVgsQ0FDQyxDQUFDLElBREYsQ0FDTyxDQUFDLFFBQUQsQ0FBQSxHQUFBO2lCQUFjLFFBQVEsQ0FBQyxJQUFULENBQUE7UUFBZCxDQURQLENBRUMsQ0FBQyxJQUZGLENBRU8sQ0FBQyxJQUFELENBQUEsR0FBQTtVQUNMLFlBQUEsR0FBZTtpQkFDZixJQUFBLENBQUssT0FBTyxDQUFDLEtBQWI7UUFGSyxDQUZQO01BRmtCO0lBTlMsQ0FBN0I7V0FjQSxHQUFBLENBQUk7TUFBQyxFQUFBLEVBQUs7SUFBTixDQUFKLEVBQXdCLFFBQUEsQ0FBQSxDQUFBO01BRXZCLEdBQUEsQ0FBSTtRQUFFLEtBQUEsRUFBUTtNQUFWLENBQUosRUFBdUMsUUFBQSxDQUFBLENBQUE7ZUFDdEMsS0FBQSxDQUFNLENBQUEsQ0FBTixFQUFVLFFBQUEsQ0FBQSxDQUFBO2lCQUNULEtBQUEsQ0FBTSxDQUFBLENBQU4sRUFBVSxRQUFBLENBQUEsQ0FBQTtZQUNULEVBQUEsQ0FBRyxDQUFBLENBQUgsRUFBTyxRQUFBLENBQUEsQ0FBQTtjQUNOLEVBQUEsQ0FBRztnQkFBQyxJQUFBLEVBQU07Y0FBUCxDQUFIO3FCQUNBLEVBQUEsQ0FBRyxDQUFBLENBQUgsRUFBTyxRQUFBLENBQUEsQ0FBQTt1QkFDTixDQUFBLENBQUU7a0JBQUMsSUFBQSxFQUFNLElBQUksQ0FBQyxJQUFaO2tCQUFrQixJQUFBLEVBQU0sSUFBSSxDQUFDLFFBQTdCO2tCQUF1QyxNQUFBLEVBQU87Z0JBQTlDLENBQUY7Y0FETSxDQUFQO1lBRk0sQ0FBUDtZQUlBLEVBQUEsQ0FBRyxDQUFBLENBQUgsRUFBTyxRQUFBLENBQUEsQ0FBQTtjQUNOLEVBQUEsQ0FBRztnQkFBQyxJQUFBLEVBQU07Y0FBUCxDQUFIO3FCQUNBLEVBQUEsQ0FBRztnQkFBQyxJQUFBLEVBQU0sSUFBSSxDQUFDO2NBQVosQ0FBSDtZQUZNLENBQVA7WUFHQSxFQUFBLENBQUcsQ0FBQSxDQUFILEVBQU8sUUFBQSxDQUFBLENBQUE7Y0FDTixFQUFBLENBQUc7Z0JBQUMsSUFBQSxFQUFNO2NBQVAsQ0FBSDtxQkFDQSxFQUFBLENBQUc7Z0JBQUMsSUFBQSxFQUFNLElBQUksQ0FBQztjQUFaLENBQUg7WUFGTSxDQUFQO21CQUdBLEVBQUEsQ0FBRyxDQUFBLENBQUgsRUFBTyxRQUFBLENBQUEsQ0FBQTtjQUNOLEVBQUEsQ0FBRztnQkFBQyxJQUFBLEVBQU07Y0FBUCxDQUFIO3FCQUNBLEVBQUEsQ0FBRztnQkFBQyxJQUFBLEVBQU0sSUFBSSxJQUFKLENBQVMsSUFBSSxDQUFDLFVBQWQsQ0FBeUIsQ0FBQyxjQUExQixDQUF5QyxJQUF6QztjQUFQLENBQUg7WUFGTSxDQUFQO1VBWFMsQ0FBVjtRQURTLENBQVY7TUFEc0MsQ0FBdkM7YUFpQkEsR0FBQSxDQUFJO1FBQUUsS0FBQSxFQUFRO01BQVYsQ0FBSixFQUF3QyxRQUFBLENBQUEsQ0FBQTtRQUN2QyxDQUFBLENBQUU7VUFBRSxJQUFBLEVBQU8sZUFBVDtVQUEwQixLQUFBLEVBQVE7UUFBbEMsQ0FBRjtlQUNBLEVBQUEsQ0FBRztVQUFFLEtBQUEsRUFBUTtRQUFWLENBQUgsRUFBbUMsUUFBQSxDQUFBLENBQUE7QUFDbEMsY0FBQSxXQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUE7QUFBQTtVQUFBLEtBQUEsOENBQUE7O1lBQ0MsR0FBQSxHQUFNLEVBQUEsQ0FBRztjQUFFLEtBQUEsRUFBUSxrQkFBVjtjQUE4QixZQUFBLEVBQWUsV0FBVyxDQUFDLEtBQXpEO2NBQWdFLFFBQUEsRUFBVztZQUEzRSxDQUFILEVBQWtGLFFBQUEsQ0FBQSxDQUFBO2NBQ3ZGLEdBQUEsQ0FBSTtnQkFBRSxHQUFBLEVBQU0sV0FBVyxDQUFDLFVBQXBCO2dCQUFnQyxNQUFBLEVBQVMsRUFBekM7Z0JBQTZDLEtBQUEsRUFBUTtjQUFyRCxDQUFKO3FCQUNBLEdBQUEsQ0FBSTtnQkFBRSxLQUFBLEVBQVE7Y0FBVixDQUFKLEVBQW1DLFFBQUEsQ0FBQSxDQUFBO2dCQUNsQyxHQUFBLENBQUk7a0JBQUUsSUFBQSxFQUFPLFdBQVcsQ0FBQztnQkFBckIsQ0FBSjt1QkFDQSxHQUFBLENBQUk7a0JBQUUsSUFBQSxFQUFPLFdBQVcsQ0FBQyxhQUFyQjtrQkFBb0MsS0FBQSxFQUFRO2dCQUE1QyxDQUFKO2NBRmtDLENBQW5DO1lBRnVGLENBQWxGO3lCQUtILENBQUEsQ0FBQyxXQUFELENBQUEsR0FBQTtjQUNGLEdBQUcsQ0FBQyxPQUFKLEdBQWMsQ0FBQSxDQUFBLEdBQUE7dUJBQUcsTUFBTSxDQUFDLElBQVAsQ0FBWSxXQUFXLENBQUMsUUFBeEIsRUFBa0MsUUFBbEM7Y0FBSDtxQkFDZCxHQUFHLENBQUMsT0FBSixHQUFjLFFBQUEsQ0FBQyxDQUFELENBQUE7Z0JBQ2IsSUFBRyxDQUFDLENBQUMsR0FBRixLQUFTLE9BQVo7eUJBQXlCLE1BQU0sQ0FBQyxJQUFQLENBQVksV0FBVyxDQUFDLFFBQXhCLEVBQWtDLFFBQWxDLEVBQXpCOztjQURhO1lBRlosQ0FBQSxDQUFILENBQUksV0FBSjtVQU5ELENBQUE7O1FBRGtDLENBQW5DO01BRnVDLENBQXhDO0lBbkJ1QixDQUF4QjtFQWZJLENBQUw7QUFGTSIsInNvdXJjZXNDb250ZW50IjpbIlVSTCA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9vcmdzL0hhY2tZb3VyRnV0dXJlL3JlcG9zP3Blcl9wYWdlPTEwMFwiXHJcblxyXG5yZXBvcyA9IG51bGxcclxucmVwbyA9IG51bGxcclxuY29udHJpYnV0b3JzID0gW11cclxuXHJcbmZldGNoIFVSTFxyXG5cdC50aGVuIChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpXHJcblx0LnRoZW4gKGpzb24pID0+XHJcblx0XHRyZXBvcyA9IGpzb25cclxuXHRcdHJlcG9zLnNvcnQgKGEsYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUgYi5uYW1lXHJcblx0XHRwcmludCByZXBvc1xyXG5cdFx0cmVwbyA9IHJlcG9zWzBdXHJcblx0XHRmZXRjaCByZXBvLmNvbnRyaWJ1dG9yc191cmxcclxuXHRcdFx0LnRoZW4gKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKClcclxuXHRcdFx0LnRoZW4gKGpzb24pID0+XHJcblx0XHRcdFx0Y29udHJpYnV0b3JzID0ganNvblxyXG5cdFx0XHRcdHZpZXcgMFxyXG5cclxudmlldyA9IChyZXBvTnIpIC0+XHJcblx0ZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSAnJyAjIEJBRCFcclxuXHRib2R5IC0+XHJcblx0XHRoZWFkZXIgeyBjbGFzcyA6IFwiaGVhZGVyXCIgfSwgLT5cclxuXHRcdFx0cCB7IHRleHQgOiBcIkhZRiBSZXBvc2l0b3JpZXNcIn1cclxuXHRcdFx0c2VsZWN0MCA9IHNlbGVjdCB7IGNsYXNzIDogXCJyZXBvLXNlbGVjdG9yXCIsIFwiYXJpYS1sYWJlbFwiIDogXCJIWUYgUmVwb3NpdG9yaWVzXCIgfSwgLT5cclxuXHRcdFx0XHRmb3IgcmVwbzEsa2V5IGluIHJlcG9zXHJcblx0XHRcdFx0XHRvcHRpb24geyB0ZXh0IDogcmVwbzEubmFtZSwgdmFsdWUgOiBrZXkgfVxyXG5cdFx0XHRzZWxlY3QwLnZhbHVlID0gcmVwb05yXHJcblx0XHRcdHNlbGVjdDAub25jaGFuZ2UgPSA9PlxyXG5cdFx0XHRcdHJlcG8gPSByZXBvc1tzZWxlY3QwLnZhbHVlXVxyXG5cdFx0XHRcdGZldGNoIHJlcG8uY29udHJpYnV0b3JzX3VybFxyXG5cdFx0XHRcdFx0LnRoZW4gKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKClcclxuXHRcdFx0XHRcdC50aGVuIChqc29uKSA9PlxyXG5cdFx0XHRcdFx0XHRjb250cmlidXRvcnMgPSBqc29uXHJcblx0XHRcdFx0XHRcdHZpZXcgc2VsZWN0MC52YWx1ZVxyXG5cclxuXHRcdGRpdiB7aWQgOiAnY29udGFpbmVyJ30sIC0+XHJcblxyXG5cdFx0XHRkaXYgeyBjbGFzcyA6IFwibGVmdC1kaXYgd2hpdGVmcmFtZVwiIH0sIC0+XHJcblx0XHRcdFx0dGFibGUge30sIC0+XHJcblx0XHRcdFx0XHR0Ym9keSB7fSwgLT5cclxuXHRcdFx0XHRcdFx0dHIge30sIC0+XHJcblx0XHRcdFx0XHRcdFx0dGQge3RleHQ6IFwiUmVwb3NpdG9yeVwifVxyXG5cdFx0XHRcdFx0XHRcdHRkIHt9LCAtPlxyXG5cdFx0XHRcdFx0XHRcdFx0YSB7dGV4dDogcmVwby5uYW1lLCBocmVmOiByZXBvLmh0bWxfdXJsLCB0YXJnZXQ6XCJfYmxhbmtcIn1cclxuXHRcdFx0XHRcdFx0dHIge30sIC0+XHJcblx0XHRcdFx0XHRcdFx0dGQge3RleHQ6ICdEZXNjcmlwdGlvbid9XHJcblx0XHRcdFx0XHRcdFx0dGQge3RleHQ6IHJlcG8uZGVzY3JpcHRpb259XHJcblx0XHRcdFx0XHRcdHRyIHt9LCAtPlxyXG5cdFx0XHRcdFx0XHRcdHRkIHt0ZXh0OiAnRm9ya3MnfVxyXG5cdFx0XHRcdFx0XHRcdHRkIHt0ZXh0OiByZXBvLmZvcmtzfVxyXG5cdFx0XHRcdFx0XHR0ciB7fSwgLT5cclxuXHRcdFx0XHRcdFx0XHR0ZCB7dGV4dDogJ1VwZGF0ZWQnfVxyXG5cdFx0XHRcdFx0XHRcdHRkIHt0ZXh0OiBuZXcgRGF0ZShyZXBvLnVwZGF0ZWRfYXQpLnRvTG9jYWxlU3RyaW5nKCdzdicpfVxyXG5cclxuXHRcdFx0ZGl2IHsgY2xhc3MgOiBcInJpZ2h0LWRpdiB3aGl0ZWZyYW1lXCIgfSwgLT5cclxuXHRcdFx0XHRwIHsgdGV4dCA6IFwiQ29udHJpYnV0aW9uc1wiLCBjbGFzcyA6IFwiY29udHJpYnV0b3ItaGVhZGVyXCIgfVxyXG5cdFx0XHRcdHVsIHsgY2xhc3MgOiBcImNvbnRyaWJ1dG9yLWxpc3RcIiB9LCAtPlxyXG5cdFx0XHRcdFx0Zm9yIGNvbnRyaWJ1dG9yIGluIGNvbnRyaWJ1dG9yc1xyXG5cdFx0XHRcdFx0XHRsaTAgPSBsaSB7IGNsYXNzIDogXCJjb250cmlidXRvci1pdGVtXCIsIFwiYXJpYS1sYWJlbFwiIDogY29udHJpYnV0b3IubG9naW4sIHRhYmluZGV4IDogMH0sIC0+XHJcblx0XHRcdFx0XHRcdFx0aW1nIHsgc3JjIDogY29udHJpYnV0b3IuYXZhdGFyX3VybCwgaGVpZ2h0IDogNDgsIGNsYXNzIDogXCJjb250cmlidXRvci1hdmF0YXJcIn1cclxuXHRcdFx0XHRcdFx0XHRkaXYgeyBjbGFzcyA6IFwiY29udHJpYnV0b3ItZGF0YVwifSwgLT5cclxuXHRcdFx0XHRcdFx0XHRcdGRpdiB7IHRleHQgOiBjb250cmlidXRvci5sb2dpbiB9XHJcblx0XHRcdFx0XHRcdFx0XHRkaXYgeyB0ZXh0IDogY29udHJpYnV0b3IuY29udHJpYnV0aW9ucywgY2xhc3MgOiBcImNvbnRyaWJ1dG9yLWJhZGdlXCIgfVxyXG5cdFx0XHRcdFx0XHRkbyAoY29udHJpYnV0b3IpID0+XHJcblx0XHRcdFx0XHRcdFx0bGkwLm9uY2xpY2sgPSA9PiB3aW5kb3cub3BlbiBjb250cmlidXRvci5odG1sX3VybCwgXCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0XHRcdGxpMC5vbmtleXVwID0gKHQpIC0+XHJcblx0XHRcdFx0XHRcdFx0XHRpZiB0LmtleSA9PSAnRW50ZXInIHRoZW4gd2luZG93Lm9wZW4gY29udHJpYnV0b3IuaHRtbF91cmwsIFwiX2JsYW5rXCJcclxuIl19
//# sourceURL=c:\github\foo\019-Coffee\coffee\App.coffee