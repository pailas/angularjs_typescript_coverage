angular.module('myTodoApp')
    .service('todoService', ['$http', '$q', function ($http, $q) {
        this.getMockTodos = function getData() {
            var deferred = $q.defer();
            $http.get('jsonplaceholder.typicode.com/todos').then(function (data) {
                deferred.resolve(data);
            }, function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
        this.getTodos = function () {
            return [
                { id: 1, description: "todo 1" },
                { id: 2, description: "todo 2" },
                { id: 3, description: "todo 3" }
            ];
        };
    }]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8vdG9kb1NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7S0FDMUIsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxLQUFLLEVBQUUsRUFBRTtRQUUxRCxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ25CLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUUxQixLQUFLLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtnQkFDbEUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixDQUFDLEVBQUUsVUFBVSxLQUFLO2dCQUNqQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDekIsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNmLE1BQU0sQ0FBQztnQkFDTixFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsV0FBVyxFQUFDLFFBQVEsRUFBQztnQkFDNUIsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBQyxRQUFRLEVBQUM7Z0JBQzVCLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxXQUFXLEVBQUMsUUFBUSxFQUFDO2FBQzVCLENBQUM7UUFDSCxDQUFDLENBQUE7SUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRvZG8vdG9kb1NlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnbXlUb2RvQXBwJylcclxuLnNlcnZpY2UoJ3RvZG9TZXJ2aWNlJywgWyckaHR0cCcsICckcScsIGZ1bmN0aW9uICgkaHR0cCwgJHEpIHtcclxuXHJcblx0dGhpcy5nZXRNb2NrVG9kb3MgPSBmdW5jdGlvbiBnZXREYXRhKCkge1xyXG5cdFx0dmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHJcblx0XHQkaHR0cC5nZXQoJ2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MnKS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcblx0XHRcdGRlZmVycmVkLnJlc29sdmUoZGF0YSk7XHJcblx0XHR9LCBmdW5jdGlvbiAoZXJyb3IpIHtcclxuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0VG9kb3MgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gW1xyXG5cdFx0XHR7aWQ6MSwgZGVzY3JpcHRpb246XCJ0b2RvIDFcIn0sXHJcblx0XHRcdHtpZDoyLCBkZXNjcmlwdGlvbjpcInRvZG8gMlwifSxcclxuXHRcdFx0e2lkOjMsIGRlc2NyaXB0aW9uOlwidG9kbyAzXCJ9XHJcblx0XHRdO1xyXG5cdH1cclxufV0pOyJdLCJzb3VyY2VSb290IjoiQzpcXHNyY1xcdGVzdFxcbmdUZXN0X3RzIn0=
