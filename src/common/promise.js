angular.module('moduleUsingPromise', [])
    .factory('dataSvc', function (dataSourceSvc, $q) {
    function getData() {
        var deferred = $q.defer();
        dataSourceSvc.getAllItems().then(function (data) {
            deferred.resolve(data);
        }, function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    }
    return {
        getData: getData
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9wcm9taXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxDQUFDO0tBQ25DLE9BQU8sQ0FBQyxTQUFTLEVBQUUsVUFBUyxhQUFhLEVBQUUsRUFBRTtJQUMxQztRQUNJLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUxQixhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUMzQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBRSxVQUFVLEtBQUs7WUFDZCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVELE1BQU0sQ0FBQTtRQUNGLE9BQU8sRUFBQyxPQUFPO0tBQ2xCLENBQUM7QUFDTixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJjb21tb24vcHJvbWlzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdtb2R1bGVVc2luZ1Byb21pc2UnLCBbXSlcclxuICAgIC5mYWN0b3J5KCdkYXRhU3ZjJywgZnVuY3Rpb24oZGF0YVNvdXJjZVN2YywgJHEpe1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldERhdGEoKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblxyXG4gICAgICAgICAgICBkYXRhU291cmNlU3ZjLmdldEFsbEl0ZW1zKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZShkYXRhKTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICBnZXREYXRhOmdldERhdGFcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiJdLCJzb3VyY2VSb290IjoiQzpcXHNyY1xcdGVzdFxcbmdUZXN0X3RzIn0=