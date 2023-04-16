"""
Class for lobby
"""
import hashlib
from api.schemas.user import User


class Lobby():

    def __init__(self, ogboi):
        """"
        :param ogboi: user object, first person who created lobby and will be the original creator of the playlist
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
        firstuser = list(self.users.keys())[0]
        key = firstuser.user_id
        key = hashlib.sha256(key.encode())
        key = key.hexdigest()
        return key

    def addNewUser(self, newuser):
        """
        function for adding new user to the lobby
        :param newuser: user object, a new user who joins the lobby
        """
        self.users[newuser] = ""

    def deleteUser(self, user):
        """
        function for adding new user to the lobby
        :param user: user object, user to delete
        """
        self.users.pop(user)

    def returnUsers(self):
        """
        function for returning just the users
        """
        userObjects = []
        for user in self.users.keys():
            userObjects.append(user)
        return userObjects

    def returnInputs(self):
        """
        function for returning just the GPT inputs
        """
        gptinputs = []
        for input in self.users.values():
            gptinputs.append(input)
        return gptinputs


    def updateGPTInput(self, user, input):
        """
        function to add/update GPT input to respective user
        :param user: user object
        :param input: str, user input for GPT
        """
        self.users[user] = input

    def to_dict(self):
        return {
            "lobby_code": self.lobbycode,
            "users" : self.returnUsers(),
            "gpt_inputs" : self.returnInputs()
        }