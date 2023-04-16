"""
Class for lobby
"""
import hashlib
from api.schemas.user import User


class Lobby():

    def __init__(self, ogboi):
        """"
        :param ogboi: str of user_id, first person who created lobby and will be the original creator of the playlist
        """
        self.lobbycode = ""
        """
        users dictionary:
        user object : GPT input
        """
        self.users = {ogboi : ""}


    def generateLobbyKey(self):
        """
        generate a unique lobby code
        hash userID to create
        """
        key = list(self.users.keys())[0]
        key = hashlib.sha256(key.encode())
        key = key.hexdigest()
        return key

    def addNewUser(self, newuser):
        """
        function for adding new user to the lobby
        :param newuser: str, id of a new user who joins the lobby
        """
        self.users[newuser] = ""

    def deleteUser(self, user):
        """
        function for adding new user to the lobby
        :param user: str, id of a user who is in the lobby
        """
        self.users.pop(user)

    def returnUsers(self):
        """
        function for returning just the users
        """
        return self.users.keys()

    def returnInputs(self):
        """
        function for returning just the GPT inputs
        """
        return self.users.values()


    def updateGPTInput(self, user, input):
        """
        function to add/update GPT input to respective user
        :param user: str, id of a user 
        :param input: str, user input for GPT
        """
        self.users[user] = input

    def to_dict(self, user):
        """
        function to return dictionary version of a user in lobby
        :param user: user id string
        """
        return {
            "user_id" : user,
            "gpt_input" : self.users[user]
        }